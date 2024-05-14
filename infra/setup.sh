#!/bin/bash

# Atualizar pacotes e instalar Docker
sudo apt-get update
sudo apt-get install -y docker.io

# Adicionar o usuário 'ubuntu' ao grupo 'docker'
sudo usermod -aG docker ubuntu

# Habilitar e iniciar o serviço Docker
sudo systemctl enable docker
sudo systemctl start docker
