output "vpc_id" {
  value = aws_vpc.main.id
}

output "subnet_id_1" {
  value = aws_subnet.public_subnet_1.id
}

output "subnet_id_2" {
  value = aws_subnet.public_subnet_2.id
}

output "backend_instance_1_id" {
  value = aws_instance.backend_1.id
}

output "backend_instance_2_id" {
  value = aws_instance.backend_2.id
}

output "elb_security_group_id" {
  value = aws_security_group.elb_sg.id
}

output "backend_security_group_id" {
  value = aws_security_group.backend_sg.id
}

output "db_security_group_id" {
  value = aws_security_group.db_sg.id
}

output "web_elb_dns_name" {
  value = aws_elb.web_elb.dns_name
}

output "autoscaling_group_name" {
  value = aws_autoscaling_group.app.name
}

output "db_instance_address" {
  value = aws_db_instance.database.address
}
