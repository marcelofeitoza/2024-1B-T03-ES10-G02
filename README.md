# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://github.com/2023M7T3-Inteli/Projeto3/blob/main/assets/imagens/Inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Projeto de concepção de fluxo de entrega continua

Solução de automatização dos processos de deploy de desenvolvimentos na plataforma Salesforce

## Grupo 2 - Deploy Buddy

### 🚀 Integrantes
- <a href="https://www.linkedin.com/in/ana-clara-loureiro-muller-zaidan/">Ana Clara Loureiro Muller Zaidan</a>
- <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Hirasaki Leite</a>
- <a href="https://www.linkedin.com/in/bruno-omeira/">Bruno Otavio Bezerra de Meira</a>
- <a href="https://www.linkedin.com/in/marcelofeitoza7/">Marcelo Gomes Feitoza</a>
- <a href="https://www.linkedin.com/in/mariana-silva-paula/">Mariana Silva de Paula</a>
- <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo Santos</a>
- <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Hagge Baptista</a>
- <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho/">Victor Severiano de Carvalho</a>

## Sumário
* [Descrição ](#descricao)
* [Estrutura de pastas](#estrutura)
* [Instalação](#instalacao)
* [Histórico de Lançamentos](#historico)
* [Licença/license](#licenca)
* [Referências](#ref)
* [Documentação](#documentacao)

## 📜 Descrição
No ambiente de desenvolvimento da Salesforce, a EveryMind tem se deparado com grandes desafios na coordenação de diversas equipes que atuam simultaneamente nos mesmos ambientes. A natureza do desenvolvimento na Salesforce, que geralmente não demanda códigos altamente complexos, não impede que surjam complicações: o trabalho simultâneo resulta na criação de metadados que, muitas vezes, interferem uns com os outros. Essa sobreposição de dados pode complicar os processos de DevOps, sobretudo em tarefas como a gestão de versões, a realização de revisões de código e os merges. O cenário é ainda mais desafiador devido à falta de conhecimento aprofundado de ferramentas de controle de versão, como o Git, por parte de alguns usuários.

Diante disso, o projeto tem como meta o desenvolvimento de uma ferramenta visual intuitiva que capacite os usuários a se conectarem facilmente ao ambiente Salesforce, a realizarem o download de metadados, a criarem pacotes de forma eficaz, além de facilitar o processo de merge e versionamento dos mesmos. A ideia é proporcionar essa experiência sem exigir grande expertise técnica, tornando o processo mais simples e acessível para todos os envolvidos.

## 📁 Estrutura de pastas

|--> Docs<br>
&emsp;| Files<br>
&emsp;| Assets<br>
&emsp;| Slides<br>
|--> Infra<br>
|--> Src<br>
&emsp;| Backstage<br>
&emsp;| Client<br>
&emsp;| Merge-solver<br>
&emsp;| Server<br>
&emsp;| Sonarqube<br>
| readme.md<br>

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- `docs/`: Nesta pasta estão localizados todos os aqui estão todos os arquivos .md de documentação do projeto, além de uma subpasta "assets", em que estão localizadas as imagens utilizadas.

- `/src`: Nessa pasta encontra-se todo o código fonte criado para o desenvolvimento do backend, frontend e microsserviços.

- `/infra`: Nessa pasta encontra-se todos os dados e configurações dos ambientes de desenvolvimento, como dev, uat e prod na AWS.
  
- <b>README.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

## 🔧 Instalação
N/A até o momento.

## 🗃 Histórico de lançamentos

* 0.0.0 - 16/04/2024
    * Template Inicial.
      
* 0.1.0 - 26/04/2024
    * Product Discovery
    * Requisitos
    * Diagrama C4 model
    * Catálago de serviços
    * Gestão de configuração
    * Definição de métricas
 
* 0.2.0 - 10/05/2024
    * Configuração Esteira de CI
    * Implementação de funcionalidades
    * Configuração de ambiente
    * Service Blueprint
    * Coleta de Métricas
 
* 0.3.0 - 
    * Terceira versão
 
* 0.4.0 - 
    * Quarta versão
 
* 0.5.0 - 
    *  Quinta versão - final
      

## 📋 Licença/License

<a href="https://github.com/Inteli-College/2024-1B-T03-ES10-G02">Deploy Buddy</a> by <a href="https://www.inteli.edu.br/">Inteli</a>, <a href="https://www.linkedin.com/in/ana-clara-loureiro-muller-zaidan/">Ana Clara Loureiro Muller Zaidan</a>, <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Hirasaki Leite</a>, <a href="https://www.linkedin.com/in/bruno-omeira/">Bruno Otavio Bezerra de Meira</a>, <a href="https://www.linkedin.com/in/marcelofeitoza7/">Marcelo Gomes Feitoza</a>, <a href="https://www.linkedin.com/in/mariana-silva-paula/">Mariana Silva de Paula</a>, <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo Santos</a>, <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Hagge Baptista</a>, <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho/">Victor Severiano de Carvalho</a> is Licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 Referências
