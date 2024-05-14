#!/bin/bash

# Configura variáveis necessárias
ELB_NAME="web-elb"
KEY_PAIR_NAME="deployer-key-pair"

# Função para checar se um recurso específico já está no estado do Terraform
check_terraform_state() {
  terraform state list | grep -q $1
}

# Checar e importar o ELB se ele já existir e não estiver no estado do Terraform
if aws elb describe-load-balancers --load-balancer-names "$ELB_NAME" 2>&1 | grep -q 'LoadBalancerName'; then
  if ! check_terraform_state "aws_elb.web_elb"; then
    echo "ELB já existe, importando..."
    terraform import aws_elb.web_elb "$ELB_NAME"
  else
    echo "ELB já está no estado do Terraform."
  fi
fi

# Checar e importar o Key Pair se ele já existir e não estiver no estado do Terraform
if aws ec2 describe-key-pairs --key-names "$KEY_PAIR_NAME" 2>&1 | grep -q 'KeyPairId'; then
  if ! check_terraform_state "aws_key_pair.deployer_key_pair"; then
    echo "Key Pair já existe, importando..."
    terraform import aws_key_pair.deployer_key_pair "$KEY_PAIR_NAME"
  else
    echo "Key Pair já está no estado do Terraform."
  fi
fi

# Checar e importar o DB Subnet Group se ele já existir e não estiver no estado do Terraform
if aws rds describe-db-subnet-groups --db-subnet-group-name "main-subnet-group" 2>&1 | grep -q 'DBSubnetGroupName'; then
  if ! check_terraform_state "aws_db_subnet_group.main_subnet_group"; then
    echo "DB Subnet Group já existe, importando..."
    terraform import aws_db_subnet_group.main_subnet_group "main-subnet-group"
  else
    echo "DB Subnet Group já está no estado do Terraform."
  fi
fi

# Verifica o plano de execução do Terraform
echo "Verificando plano do Terraform..."
plan_output=$(terraform plan -no-color -var="db_password=$DB_PASSWORD" -var="public_key=$PUBLIC_KEY")
echo "$plan_output"

# Executar o Terraform Apply apenas se necessário
if echo "$plan_output" | grep -q 'No changes'; then
  echo "Nenhuma mudança necessária."
else
  echo "Aplicando mudanças..."
  terraform apply -auto-approve -var="db_password=$DB_PASSWORD" -var="public_key=$PUBLIC_KEY"
fi
