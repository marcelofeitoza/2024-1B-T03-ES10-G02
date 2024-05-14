output "vpc_id" {
  value = aws_vpc.main.id
}

output "subnet_id_1a" {
  value = aws_subnet.public_subnet_1a.id
}

output "subnet_id_1b" {
  value = aws_subnet.public_subnet_1b.id
}

output "backend_instance_1_id" {
  value = aws_instance.backend_instance_1.id
}

output "backend_instance_2_id" {
  value = aws_instance.backend_instance_2.id
}

output "elb_security_group_id" {
  value = aws_security_group.elb_security_group.id
}

output "backend_security_group_id" {
  value = aws_security_group.backend_security_group.id
}

output "db_security_group_id" {
  value = aws_security_group.rds_security_group.id
}

output "web_elb_dns_name" {
  value = aws_elb.web_elb.dns_name
}

output "autoscaling_group_name" {
  value = aws_autoscaling_group.app_autoscaling_group.name
}

output "db_instance_address" {
  value = aws_db_instance.main_database.address
}
