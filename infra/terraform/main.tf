resource "aws_vpc" "main" {
  cidr_block           = "10.1.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "main-vpc"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "main-igw"
  }
}

resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.main.default_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

resource "aws_subnet" "public_subnet_1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.1.0.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1"
  }
}

resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.1.16.0/24"
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-2"
  }
}

resource "aws_security_group" "elb_sg" {
  name        = "elb-security-group"
  description = "Security group for the ELB"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ELB Security Group"
  }
}

resource "aws_security_group" "backend_sg" {
  name        = "backend-security-group"
  description = "Security group for backend instances"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.elb_sg.id]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Backend Security Group"
  }
}

resource "aws_security_group" "db_sg" {
  name        = "db-security-group"
  description = "Security group for RDS"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "RDS Security Group"
  }
}

resource "aws_db_subnet_group" "main" {
  name       = "main-subnet-group"
  subnet_ids = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]

  tags = {
    Name = "Main Subnet Group"
  }
}

resource "aws_db_instance" "database" {
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "12.15"
  instance_class         = "db.t3.medium"
  username               = "postgres"
  password               = var.db_password
  parameter_group_name   = "default.postgres12"
  skip_final_snapshot    = true
  publicly_accessible    = false
  vpc_security_group_ids = [aws_security_group.db_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name

  tags = {
    Name = "main-db"
  }
}

resource "aws_instance" "backend_1" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public_subnet_1.id
  tags = {
    Name = "backend-instance-1"
  }
  vpc_security_group_ids = [aws_security_group.backend_sg.id]
}

resource "aws_instance" "backend_2" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public_subnet_2.id
  tags = {
    Name = "backend-instance-2"
  }
  vpc_security_group_ids = [aws_security_group.backend_sg.id]
}

resource "aws_elb" "web_elb" {
  name = "terraform-web-elb"

  listener {
    instance_port     = 80
    instance_protocol = "HTTP"
    lb_port           = 80
    lb_protocol       = "HTTP"
  }

  security_groups = [aws_security_group.elb_sg.id]
  subnets         = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]

  health_check {
    target              = "HTTP:80/"
    interval            = 30
    timeout             = 5
    unhealthy_threshold = 2
    healthy_threshold   = 2
  }

  tags = {
    Name = "WebELB"
  }
}

resource "aws_key_pair" "deployer" {
  public_key = var.public_key
}

resource "aws_launch_configuration" "app" {
  name_prefix   = "terraform-app-launch-configuration-"
  image_id      = var.ami
  instance_type = var.instance_type
  key_name      = aws_key_pair.deployer.key_name

  security_groups = [aws_security_group.backend_sg.id]

  user_data = <<-EOF
                #!/bin/bash
                echo "Hello, Terraform!" > /var/www/html/index.html
                EOF
}

resource "aws_autoscaling_group" "app" {
  launch_configuration = aws_launch_configuration.app.id
  min_size             = 1
  max_size             = 3
  desired_capacity     = 2

  vpc_zone_identifier = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]

  tag {
    key                 = "Name"
    value               = "terraform-asg-instance"
    propagate_at_launch = true
  }
}
