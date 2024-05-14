#!/bin/bash

# Clonar o repositório
git clone https://github.com/marcelofeitoza/2024-1B-T03-ES10-G02 /home/ubuntu/app

# Navegar para o diretório da aplicação
cd /home/ubuntu/app/src/server

# Construir e iniciar os contêineres Docker
sudo docker-compose -f compose.prod.yml up -d --build
