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

resource "aws_subnet" "public_subnet_1a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.1.0.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1a"
  }
}

resource "aws_subnet" "public_subnet_1b" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.1.16.0/24"
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1b"
  }
}

resource "aws_security_group" "elb_security_group" {
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
    Name = "elb-security-group"
  }
}

resource "aws_security_group" "backend_security_group" {
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
    security_groups = [aws_security_group.elb_security_group.id]
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
    Name = "backend-security-group"
  }
}

resource "aws_security_group" "rds_security_group" {
  name        = "rds-security-group"
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
    Name = "rds-security-group"
  }
}

resource "aws_db_subnet_group" "main_subnet_group" {
  name       = "main-subnet-group"
  subnet_ids = [aws_subnet.public_subnet_1a.id, aws_subnet.public_subnet_1b.id]

  tags = {
    Name = "main-subnet-group"
  }

  lifecycle {
    create_before_destroy   = true
    ignore_changes          = [subnet_ids]
  }
}


resource "aws_db_instance" "main_database" {
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "12.15"
  instance_class         = "db.t3.medium"
  username               = "postgres"
  password               = var.db_password
  parameter_group_name   = "default.postgres12"
  skip_final_snapshot    = true
  publicly_accessible    = false
  vpc_security_group_ids = [aws_security_group.rds_security_group.id]
  db_subnet_group_name   = aws_db_subnet_group.main_subnet_group.name

  tags = {
    Name = "main-db"
  }
}

resource "aws_instance" "backend_instance_1" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public_subnet_1a.id
  key_name      = aws_key_pair.deployer_key_pair.key_name

  tags = {
    Name = "backend-instance-1"
  }
  vpc_security_group_ids = [aws_security_group.backend_security_group.id]
  depends_on             = [aws_subnet.public_subnet_1a]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_instance" "backend_instance_2" {
  ami           = var.ami
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public_subnet_1b.id
  key_name      = "deployer-key-pair"

  tags = {
    Name = "backend-instance-2"
  }
  vpc_security_group_ids = [aws_security_group.backend_security_group.id]
  depends_on             = [aws_subnet.public_subnet_1b]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_elb" "web_elb" {
  name = "web-elb"

  listener {
    instance_port     = 80
    instance_protocol = "HTTP"
    lb_port           = 80
    lb_protocol       = "HTTP"
  }

  security_groups = [aws_security_group.elb_security_group.id]
  subnets         = [aws_subnet.public_subnet_1a.id, aws_subnet.public_subnet_1b.id]

  health_check {
    target              = "HTTP:80/"
    interval            = 30
    timeout             = 5
    unhealthy_threshold = 2
    healthy_threshold   = 2
  }

  tags = {
    Name = "web-elb"
  }

  lifecycle {
    create_before_destroy = true
    ignore_changes        = [availability_zones, instances, security_groups, subnets]
  }
}

resource "aws_key_pair" "deployer_key_pair" {
  key_name   = "deployer-key-pair"
  public_key = tls_private_key.pk.public_key_openssh

  provisioner "local-exec" {
    command = "rm -f ./deployer-key-pair.pem && echo '${tls_private_key.pk.private_key_pem}' > ./deployer-key-pair.pem && chmod 400 ./deployer-key-pair.pem"
  }

  lifecycle {
    create_before_destroy = true
    prevent_destroy       = true
  }
}

resource "aws_launch_configuration" "app_launch_configuration" {
  name_prefix   = "app-launch-configuration-"
  image_id      = var.ami
  instance_type = var.instance_type
  key_name      = aws_key_pair.deployer_key_pair.key_name

  security_groups = [aws_security_group.backend_security_group.id]

  user_data = <<-EOF
                #!/bin/bash
                echo "Hello, Terraform!" > /var/www/html/index.html
                EOF
}

resource "aws_autoscaling_group" "app_autoscaling_group" {
  launch_configuration = aws_launch_configuration.app_launch_configuration.id
  min_size             = 1
  max_size             = 3
  desired_capacity     = 2

  vpc_zone_identifier = [aws_subnet.public_subnet_1a.id, aws_subnet.public_subnet_1b.id]

  tag {
    key                 = "Name"
    value               = "asg-instance"
    propagate_at_launch = true
  }

  wait_for_capacity_timeout = "15m"

  lifecycle {
    create_before_destroy = true
  }
}

resource "tls_private_key" "pk" {
  algorithm = "RSA"
  rsa_bits  = 4096
}
