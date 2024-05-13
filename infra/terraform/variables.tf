variable "public_key" {
    description = "The public key to use for SSH access"
    type = string
}

variable "region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "ami" {
  default = "ami-0a6ea00f081e84623"
}
