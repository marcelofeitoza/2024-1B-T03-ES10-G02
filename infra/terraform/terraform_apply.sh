#!/bin/bash

# Configura variáveis necessárias
ELB_NAME="web-elb"
KEY_PAIR_NAME="deployer-key-pair"
DB_PASSWORD="$1"
PUBLIC_KEY="$2"

echo "Params: $ELB_NAME $KEY_PAIR_NAME $DB_PASSWORD $PUBLIC_KEY"

# Função para checar se um recurso específico já está no estado do Terraform
check_terraform_state() {
    terraform state list | grep -q $1
}

# Checar se o ELB já existe e não está no estado do Terraform
if aws elb describe-load-balancers --load-balancer-names "$ELB_NAME" 2>&1 | grep -q 'LoadBalancerName'; then
    if ! check_terraform_state "aws_elb.web_elb"; then
        echo "ELB já existe, importando..."
        terraform import aws_elb.web_elb "$ELB_NAME" -input=false
    else
        echo "ELB já está no estado do Terraform."
    fi
fi

# Checar se o Key Pair já existe e não está no estado do Terraform
if aws ec2 describe-key-pairs --key-names "$KEY_PAIR_NAME" 2>&1 | grep -q 'KeyPairId'; then
    if ! check_terraform_state "aws_key_pair.deployer_key_pair"; then
        echo "Key Pair já existe, importando..."
        terraform import aws_key_pair.deployer_key_pair "$KEY_PAIR_NAME" -input=false
    else
        echo "Key Pair já está no estado do Terraform."
    fi
fi

# Executar plano e aplicação apenas se necessário
echo "Verificando plano do Terraform..."
plan_output=$(terraform plan -var="db_password=${DB_PASSWORD}" -var="public_key=${PUBLIC_KEY}" -no-color)
echo "$plan_output"

if echo "$plan_output" | grep -q 'No changes'; then
    echo "Nenhuma mudança necessária."
else
    echo "Aplicando mudanças..."
    terraform apply -auto-approve -var="db_password=${DB_PASSWORD}" -var="public_key=${PUBLIC_KEY}"
fi
