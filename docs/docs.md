# Docs

## Sumário

1. [Product Discovery](#1-product-discovery)

- 1.1 [Visão do Produto](#11-visão-do-produto)
- 1.2 [É, Não é, Faz e Não faz](#12---é-não-é-faz-e-não-faz)
- 1.3 [Funcionalidades](#13---funcionalidades)
- 1.4 [Negócios e Revisão Técnica](#14---negócios-e-revisão-técnica)
- 1.5 [Sequenciamento de funcionalidades](#15---sequenciamento-de-funcionalidades)
- 1.6 [Canvas](#16---canvas)
- 1.7 [Casos de Uso](#17---casos-de-uso)

2. [Diagrama C4](#2-diagrama-c4-model---nivel-1)
3. [Service BluePrint](#3-service-blueprint)

- 3.1 [Personas](#31-personas)
  - 3.1.1 [Persona - Miguel Soares](#311-persona-miguel)
  - 3.1.2 [Persona - Letícia Brito](#312-persona-leticia)
- 3.2 [Jornada de Usuário](#32-jornada-de-usuario)
- 3.3 [Diagrama Blueprint](#33-diagrama-blueprint)
- 3.4 [Validação com parceiro](#34-validacao)

4. [Backend](#4-backend)

- 4.1 [Configuração e Instalação](#41-configuração-e-instalação)
- 4.2 [Arquitetura e tecnologias](#42-arquitetura-e-tecnologias)
- 4.3 [Documentação da API](#43-documentação-da-api)
- 4.4 [Segurança](#44-segurança)
- 4.5 [Testes realizados](#45-testes-realizados)
- 4.6 [Limpeza e Manutenção](#46limpeza-e-manutenção)

5. [Frontend](#5-frontend)

- 5.1 [Tecnologias](#51-tecnologias)
- 5.2 [Como rodar](#52-como-rodar)

# 1. Product Discovery

## 1.1 Visão do Produto

#### Para:

Analistas da empresa Everymind

#### Os quais:

- Preisam resolver conflitos de desenvolvimento paralelo (versionamento)
- Tem dificuldades em lidar com a complexidade dos Metadados

#### O produto:

Deploy Buddy

#### É um(a):

- Plataforma Web integrada com a CLI do SalesForce e Github

#### Que:

- Gerencia metadados com eficiência
- Possibilita a realização de deploys de forma automatizada
- Faz um versionamento do código atravé's de criação de repositório no Github
- Facilita a resolução de merges

#### Diferentemente de:

- Pipeline CI/CD não visual
- GitHub
- Azure DevOps

#### Nosso produto:

Possibilita a realização de deploys de forma simples, rápida e visual.

## 1.2 - É, Não é, Faz e Não faz

Essa seção define as características do produto, diferenciando o que ele é e o que não é, o que faz e o que não faz. Isso ajuda a estabelecer limites claros para o escopo do projeto e a evitar mal-entendidos entre os membros da equipe e os stakeholders.

![Is, Is Not, Does, Does Not](./assets/is-is_not-does-does_not.png)

**É (IS)**

- **Abstração no-code de versionamento**: Funciona como uma interface no-code intuitiva que permite os usuários gerenciarem versões de código sem a necessidade de escrevê-lo ou de controle de versão manualmente, tornando o processo mais acessível aos usuários foco- que não são desenvolvedores.

**Não É (IS NOT)**

- **Não é um sistema de versionamento completo**: Embora facilite algumas funções de versionamento, não possui todas as funcionalidades avançadas encontradas em sistemas dedicados, como controle detalhado de ramificações e fusões complexas.
- **Não é voltado para desenvolvedores**: Não foi desenhado como uma ferramenta de desenvolvimento de código profundo, mas sim para usuários que precisam de soluções de versionamento em um contexto de no-code/low-code.

**Faz (DOES)**

- **Integra pipelines para automatizar deploys**: Possui integração com ferramentas de CI/CD, permitindo que as atualizações de código ou conteúdo sejam automaticamente implementadas em ambientes de produção ou teste, seguindo práticas de entrega contínua.
- **Sugere resolução de conflitos de merge**: Oferece assistência utilizando inteligência artificial para resolver conflitos de merge, por exemplo, através de interfaces visuais que destacam diferenças e permitem a escolha interativa de quais mudanças manter.

**Não Faz (DOES NOT)**

- **Não substitui Git e GitHub**: Não pretende substituir sistemas de controle de versão distribuído (como Git) ou plataformas de hospedagem de código (como GitHub), mas pode ser usado em complemento a esses para simplificar certos processos.
- **Não substitui desenvolvedores**: Não automatiza ou executa tarefas de desenvolvimento de software, e sim apoia o gerenciamento de versões e a colaboração entre equipes, mantendo os desenvolvedores no centro do processo criativo e técnico.

## 1.3 - Funcionalidades

Cada funcionalidade representa uma ação ou interação do usuário com a nossa aplicação. Dessa forma, cada uma das funcionalidades foi criada visando atender a um objetivo de negócio, a uma necessidade da persona e/ou a uma etapa da jornada do usuário.

- **Login no Ambiente Salesforce**

  - **Explicação**: Implementação de autenticação para permitir que os usuários se conectem à nossa aplicação usando suas credenciais Salesforce.

- **Criar Workspace**

  - **Explicação**: Capacidade de criar um espaço de trabalho personalizado na aplicação, representando projetos atendidos pela Everymind em consultoria Salesforce.

- **Criar Ambiente**

  - **Explicação**: Permite a criação de ambientes personalizados dentro dos workspaces, como Desenvolvimento, Homologação e Produção, com a flexibilidade para o cliente criar ambientes adicionais conforme necessário.

- **Visualizar Versões de Metadados**

  - **Explicação**: Visualização simplificada e intuitiva de arquivos com metadados, facilitando o entendimento das configurações do ambiente Salesforce.

- **Visualizar Histórico de Versões**

  - **Explicação**: Acesso ao histórico de versões de todos os ambientes, permitindo acompanhar as alterações realizadas ao longo do tempo.

- **Criar Pacotes com Metadados (Release)**

  - **Explicação**: Facilita a criação de pacotes de metadados para implantação em ambiente de produção, selecionando os change sets desejados.

- **Controlar o status de uma release**

  - **Explicação**: Gerenciamento visual do status da pipeline de um pacote de release, permitindo acompanhar o progresso de desenvolvimento, homologação, testes, aprovação e produção.

- **Rodar pipeline de Desenvolvimento, Homologação ou Produção (Kanban)**

  - **Explicação**: Execução manual de uma pipeline específica para um pacote de release, agilizando o processo de implantação.

- **Enviar Pacotes para o Git (Versionamento)**

  - **Explicação**: Envio automático das alterações de um pacote de release para o Git, garantindo o versionamento adequado do código.

- **Automatizar a resolução de conflitos**

  - **Explicação**: Quando surgem conflitos simples durante a criação ou implantação de um pacote de release, nossa API de integração com a Open AI automatiza a resolução desses conflitos, solicitando confirmação do usuário apenas em casos de maior complexidade.

- **Notificar Usuários Envolvidos**

  - **Explicação**: Notificação imediata dos usuários envolvidos em caso de conflitos que exigem intervenção manual, garantindo a rápida resolução do problema. Notificações também são enviadas em caso de sucesso ou falhas na pipeline de produção.

- **Resolver os Conflitos de merge de Forma Visual**

  - **Explicação**: Apresentação visual lado a lado dos conflitos complexos no frontend, permitindo que o usuário os resolva de maneira clara e eficiente, sendo uma alternativa à resolução automatizada.

- **Gerar Relatório de Conflitos Resolvidos**
  - **Explicação**: Após a resolução automática de conflitos, nosso microserviço gera um relatório detalhado das mudanças mantidas e descartadas em relação à versão anterior, possibilitando que o usuário aceite ou rejeite a versão final após a resolução de conflitos.

## 1.4 - Negócios e Revisão Técnica

Foi feita uma análise nos ambitos de negócios, tecnologia, e UX em cima das funcinalidades definidas, afim de contribuir para um processo eficiente de priorização de tarefas, além de um gerenciamento eficaz do desenvolvimento.

### Legenda

- E: Esforço necessário para completar a tarefa.
- EE: Esforço duplo em comparação com "E".
- EEE: Esforço triplo em comparação com "E".
- $: Valor de negócio baixo.
- $$: Valor de negócio médio.
- '$$$': Valor de negócio alto.
- ❤️: Baixa experiência do usuário.
- ❤️❤️: Média experiência do usuário.
- ❤️❤️❤️: Alta experiência do usuário.

### Tarefas e Categorias

- **Login**

  - Esforço: E $ ❤️
  - **Explicação**: Desenvolver um sistema de login seguro e eficiente para os usuários, de tal modo que somente usuário com o email "@Everymind" consigam se logar em nossa plataforma.

- **Criar Workspace**

  - Esforço: EEE $ ❤️❤️
  - **Explicação**: Desenvolver uma feature que envolve um ambiente de gerenciamento de diferentes aplicações Salesforce.

- **Criar ambientes**

  - Esforço: E $ ❤️
  - **Explicação**: Desenvolver uma feature que envolve a criação de diferentes ambientes de uma aplicação, envolvendo o que seriam as branches Prod, UAT, Dev, Release e Feature.

- **Visualizar Versões de Metadados**

  - Esforço: E $ ❤️❤️
  - **Explicação**: Desenvolver uma feature na qual o usuário(analista funcional) da Everymind, consiga visualizar uma comparação da versão mais nova com alterações nos metadados, para a anterior.

- **Visualizar Histórico de Versões**

  - Esforço: E $ ❤️
  - **Explicação**: Desenvolver uma feature na qual o usuário (analista funcional) da Everymind, consiga de forma simples e rápida visualizar o histórico de versões que foram "subidas" em cada ambiente, juntamente do autor do trigger da "subida".

- **Criar Pacotes com Metadados (Release)**

  - Esforço: EE $ ❤️❤️
  - **Explicação**: Desenvolver uma feature a qual é gerado um pacote de metadados, um arquivo XML, com metadados atualizados em relação as novas mudanças.

- **Controlar o status de uma implementação**

  - Esforço: E $ ❤️❤️
  - **Explicação**: Desenvolver uma feature para que um usuário consiga controlar de forma fácil e extremamente visual qual o status da implementação que está sendo feita por esse no momento.

- **Rodar pipeline de desenvolvimento (Kanban)**

  - Esforço: EEE $ ❤️❤️
  - **Explicação**: Desenvolver uma feature para que o usuário através de um KanBan consiga subir os metadados modificados por ele em uma Organização Salesforce de Sandpox para a organização de DEV.

- **Rodar pipeline homologação (Kanban)**

  - Esforço: EEE $ ❤️❤️
  - **Explicação**: Desenvolver uma funcionalidade que permita ao usuário, por meio de um Kanban, subir os metadados modificados por ele em uma Organização Salesforce de Sandpox para a organização de UAT.

- **Rodar pipeline produção (Kanban)**

  - Esforço: EEE $ ❤️❤️
  - **Explicação**: Desenvolver uma feature para que o usuário através de um KanBan consiga subir os metadados modificados por ele em uma Organização Salesforce de Sandbox para a organização de PROD.

- **Enviar Pacotes para o Git (Versionamento)**

  - Esforço: EEE $$$ ❤️❤️❤️
  - **Explicação**: Desenvolver uma feature para que o usuário consiga cadastrar uma nova ORG de sandbox que ele criou e modificou, de modo, que após o cadastro, os metadados modificados por ele sejam enviados para o Git em uma nova branch totalmente gerenciada por nosso sistema.

- **Automatizar a resolução de conflitos quando Possível (Opção)**

  - Esforço: EEE $ ❤️
  - **Explicação**: Desenvolver uma feature na qual o sistema de forma autônoma tentará resolver os conflitos que ocorram durante o merge de branches através da utilização de inteligência artifical, de modo que o usuário não precise se preocupar com isso.

- **Notificar Usuários Envolvidos**

  - Esforço: EEE $ ❤️❤️❤️
  - Categoria: Desenvolver uma feature na qual o usuário é notificado quando existem conflitos nas mudanças em que está envolvido.

- **Resolver os Conflitos de merge de Forma Visual**

  - Esforço: EE $ ❤️❤️❤️
  - **Explicação**: Desenvolver uma funcionalidade que, quando a inteligência artificial não consiga resolver o conflito de forma autônoma, ou esteja com uma baixa certeza quando a essa resolução de conflito, o sistema irá abrir uma tela para que o usuário possa resolver o conflito de forma visual, mostrando "Upcoming", "Incoming", e "Merge".

- **Gerar Relatório de Conflitos Resolvidos**
  - Esforço: E $ ❤️
  - Categoria: Desenvolver uma feature a qual é gerado um relatório com os conflitos de merge resolvidos entre diferentes versões, tanto de forma autônoma, quanto manual.

## 4 - Sequenciamento de Funcionalidades

Este fluxo tem o objetivo de detalhar e especificar o processo de desenvolvimento de software com integração contínua e entrega contínua (CI/CD), focando principalmente na gestão de versões e na resolução de conflitos durante o merge de códigos no ambiente de produção com o Git, tudo isso tudo sendo feito através do método Kanban. O sequenciamento de funcionalidades do projeto segue as etapas:

![Fluxo_sequencer](./assets/sequencer.jpg)

1. _Início_
2. _Login_
   - Usuário inicia sessão com login Salesforce.
3. _Criar Workspace_
   - Configuração do espaço de trabalho (Projetos).
4. _Criar ambientes_
   - Configuração de ambientes de desenvolvimento, homologação, produção, teste, etc.
5. _Visualizar Versões de Metadados_
   - Opção para ver arquivos de metadados.
6. _Visualizar Histórico de Versões_
   - Opção para visualizar o histórico completo de versões dos ambientes.
7. _Rodar pipeline de desenvolvimento, homologação e produção (Kanban)_
   - Executar o pipeline para desenvolvimento, teste e produção seguindo o método Kanban.
8. _Criar Pacotes com Metadados (Release)_
   - Criar pacotes de lançamento que incluem os change sets escolhidos.
9. _Enviar Pacotes para o Git (Versionamento)_
   - Enviar pacotes para o repositório Git para controle de versão.
10. _Houve conflito?_
    - Verificação se houve um conflito, em caso negativo, o processo é concluído. Em situações onde há um conflito, é realizada à verificação para determinar se ele é simples.
11. _Conflito simples?_
    - Decisão se o conflito identificado é simples ou não.
12. _Automatizar a resolução de conflitos_
    - Se o conflito for simples, segue a automatização (API) para resolvê-lo.
13. _Gerar relatório_
    - Gerar um relatório relacionado ao processo de resolução de conflitos, com detalhamento de mudanças mantidas e deletadas.
14. _Resolução aprovada?_
    - Verificação se a resolução de conflitos foi aprovada.
15. _Resolver os Conflitos de merge de Forma Visual_
    - Se o conflito não é simples ou a resolução automática não foi aprovada, resolver os conflitos de merge visualmente lado a lado na interface.
16. _Notificar Usuários Envolvidos_
    - Notificar usuários envolvidos sobre o conflito e as resoluções.
17. _Fim_
    - O processo todo termina após a resolução e aprovação dos conflitos ocorridos durante a pipeline.

## 5 - Canvas

O Value Proposition Canvas é uma ferramenta valiosa de visualização tanto das dores atuais do parceiro, como da solução proposta por nós.
Ele contribui para um alinhamento de expectativas e escopo entre os desenvolvedores e o parceiro, através das seguintes definições, que conversam entre si:

- **Em relação ao stakeholder:** Gains, Pains e Customer Jobs;
- **Em relação ao produto:** Products & Services, Gain Creators, Pain Relievers.

<img src="./assets/ValuePropositonCanvas.jpg">

## 1.7 - Casos de uso

#### Caso de Uso 1: Usuário logar no sistema

**Objetivo:** Usuário conseguir acessar o sistema de modo que possa utilizar das funções dele.

**Pré-condições:** Usuário com acesso à internet e a um computador.

**Fluxo principal:**

1. Usuário navega até o site do sistema.
2. Usuário entra com o email empresarial da Everymind.
3. Usuário fornece a senha.

**Pós-condições:** Usuário logado e pronto para próximos passos.

**Exceções:** Email ou senha não encontrado.

#### Caso de Uso 2: Criar Branch de Atividade

**Objetivo:** Facilitar para que as alterações sejam melhores documentadas e rastreadas.

**Atores:** Analista funcional

**Pré-condições:** Usuário logado no sistema, ambiente de desenvolvimento configurado.

**Fluxo principal:**

1. Usuário seleciona a opção "Criar Branch".
2. O sistema solicita uma descrição da atividade.
3. Usuário fornece a descrição e confirma a criação.
4. O sistema cria o branch no repositório e notifica o usuário.

**Pós-condições:** Branch criado e pronto para uso.

**Exceções:** Erro ao criar o branch devido a problemas de rede ou permissões insuficientes.

#### Caso de Uso 3: Commit de Alterações

**Objetivo:** Permitir que o usuário faça commits de suas alterações de forma visual.

**Atores:** Analista funcional

**Pré-condições:** Alterações feitas localmente no branch de atividade.

**Fluxo principal:**

1. Usuário seleciona a opção de subir as alterações.
2. O sistema solicita uma mensagem de commit.
3. Usuário insere a mensagem e confirma o commit.
4. O sistema realiza as mudanças, comparando os metadados alterados com os metadados da última versão atualizada.

**Pós-condições:** As alterações são salvas no repositório.

**Exceções:** Falha ao fazer commit devido a conflitos nas alterações feitas por dois usuários.

#### Caso de Uso 4: Conflito no Merge

**Objetivo:** Permitir com que os conflitos sejam resolvidos.

**Atores:** Analista funcional

**Pré-condições:** Ao mergear a branch de atividade com a branch develop conflito de duas alterações.

**Fluxo principal:**

1. Usuário seleciona a opção de mergear branches.
2. O sistema retorna uma mensagem de conflito.
3. Usuário escolhe dentre as opções qual será commitada.
4. O sistema realiza as mudanças, levando em consideração as escolhas.

**Pós-condições:** As alterações são salvas no repositório.

**Exceções:** Falha ao mergear.

#### Caso de Uso 5: Gerar Pacote de Deploy

**Objetivo:** Automatizar a criação de pacotes de deploy com base nos metadados alterados.

**Atores:** Analista funcional

**Pré-condições:** Existência de metadados modificados que necessitam de deploy.

**Fluxo principal:**

1. Usuário seleciona a opção "Gerar Release".
2. O sistema identifica automaticamente os metadados alterados.
3. O sistema roda a pipeline para verificar se o código passa nos testes.
4. O sistema cria um pacote de deploy.
5. Usuário recebe notificação de que o pacote está pronto para deploy.

**Pós-condições:** Pacote de deploy criado e validado.

**Exceções:** Erros na criação do pacote devido a inconsistências nos metadados.

# 2. Diagrama C4 Model - nivel 1

O diagrama desenvolvido descreve a arquitetura da aplicação interna projetada para se integrar com serviços como o Salesforce e o GitHub, formando uma pipeline completa de CI/CD. Além disso, também é apresentado um microserviço de resolução de conflitos com suporte de IA, e isso tudo pode ser visualizado na imagem abaixo, ou pelo link do Draw.io:

![Diagrama C4](./assets/C4Model.png)

**Link Draw.io**: https://drive.google.com/file/d/1C39p0qz0RsNSPoEkL4isQTtm9JgVK4MK/view?usp=sharing

## Elementos do Modelo C4

### Consumidor (Pessoa)

**Tipo:** Entidade Externa  
**Descrição:**  
O consumidor é o Miguel (nossa persona) que aciona e gerencia os deploys automatizados entre os diferentes ambientes.

### Plataforma de Gerenciamento de Deploys (Aplicação)

**Tipo:** Aplicação  
**Descrição:**  
Sistema responsável por automatizar os processos de deploy através de contratos com os analistas funcionais.

### CLI Salesforce (CLI)

**Tipo:** Ferramenta  
**Descrição:**  
Utilizado para comunicação com a aplicação Salesforce para executar processos necessários como Retrieve Metadata, OrgList, etc.

### CLI GitHub (CLI)

**Tipo:** Ferramenta  
**Descrição:**  
Utilizado para comunicação com a aplicação a fim de realizar processos necessários no GitHub, como PRs, Actions, Branches, etc.

### Org's de ambientes Salesforce (Componente)

**Tipo:** Serviço  
**Descrição:**  
Os ambientes da Salesforce de DEV, UAT e PROD, no qual o sistema deverá subir os pacotes com os metadados mergeados e testados.

### Org's de SandBox Salesforce (Componente)

**Tipo:** Serviço  
**Descrição:**  
Os ambientes da sandbox, nos quais o sistema deverá pegar as modificações realizadas pelos desenvolvedores e publicar em feature branchs no repositório central.

### Gerenciamento de Conflitos (Microserviço)

**Tipo:** Microserviço  
**Descrição:**  
Responsável por verificar a existência de conflitos em PRs, branches e representar resoluções. Usa IA para sugerir como realizar o merge dos conflitos que possam surgir.

## Fluxo de Trabalho

O backend e o frontend da aplicação interna estão conectados ao CLI do Salesforce e ao CLI do GitHub. Essa conexão permite que a aplicação capture alterações nos metadados do Salesforce, suba-as para uma branch no GitHub e as integre em vários ambientes, como DEV, UAT e PROD.

## Pipeline CI/CD para o Salesforce

Uma pipeline completa de CI/CD é estabelecida, permitindo a fusão e implantação automatizadas de atualizações nos ambientes do Salesforce.

## Microserviço de Resolução de Conflitos

Um microserviço com suporte de IA é projetado para sugerir merges para conflitos durante os PRs, proporcionando um fluxo de trabalho de desenvolvimento contínuo e eficiente.

# 3. Service Blueprint

## 3.1 Personas

Pode-se dizer que Miguel e Letícia são protopersonas, visto que não foram realizadas entrevistas aprofundadas de mercado para sua definição, e sim suposições assertivas a partir das dores e necessidades trazidas pelo parceiro.

Essas personas foram desenvolvidas de forma ágil, para trazer propósito para a solução, e gerar empatia acerca do nossos principais usuários, contribuindo para uma abordagem de design com o usuário no centro.

Mesmo que não tenham sido realizadas entrevistas, essas informações foram coletadas a partir de reuniões com stakeholders, que incluiram etapas de: definição da V01 da persona, coleta de feedbacks, aplicação dos feedbakcks, V02 da persona, e validação final.

### 3.1.1 Miguel Soares

Miguel Soares é um analista funcional na EveryMind, e é nossa persona principal, visto que o Core da nossa solução, DeployBuddy, é auxilia-lo em seus processos de deploy, facilitando seus processos diários.

<img src="./assets/miguelsoares.jpg">

### 3.1.2 Letícia Brito

Leticia Brito é uma desenvolvedora Salesforce na EveryMind, e é uma das nossas personas, que fará uso da solução, que tem como intuito auxiliá-la nos processos de merge dos metadados provenientes do desenvolvimento na Salesforce e nos deploys, facilitando seus processos diários, com uma aplicação que possui uma interface simples e intuitiva.

<img src="./assets/leticiabrito.jpg">

## 3.2 Jornada de Usuário

A jornada do usuário descreve o processo pelo qual um indivíduo interage com um serviço ou produto para alcançar um objetivo específico. Este conceito é crucial no design de experiências do usuário, pois ajuda a identificar pontos de fricção, oportunidades de melhoria e os momentos críticos que impactam a percepção e a satisfação do usuário.

A jornada do usuário detalha os passos, objetivos, ações, pensamentos, e emoções dos funcionários da EveryMind, Miguel e Leticia, enquanto eles utilizam uma ferramenta de gestão de metadados e resolução de conflitos para Salesforce.

<img src="./assets/jornadaUsuario.jpg">

## 3.3 Diagrama Blueprint

O Blueprint é um diagrama que visualiza os relacionamentos entre diferentes componentes de serviço — pessoas, acessórios ( evidências físicas ou digitais ) e processos — que estão diretamente vinculados a pontos de contato em uma jornada específica do usuário. O blueprinting é uma abordagem ideal para experiências omnicanal , que envolvem vários pontos de contato ou que exigem um esforço multifuncional, o que se adequa perfeitamente a solução de automatização dos processos de deploy de desenvolvimentos na plataforma Salesforce.

Nossa solução abraange um processo complexo e totalmente integrado que envolve múltiplas ferramentas e plataformas como Salesforce CLI, Slack, GitHub, OpenIA e outras APIs também desenvolvido pela nossa equipe, como o merge-solver por exemplo. Nesta seção vamos descrever detalhadamente os componentes do nosso diagrama, organizando-os em etapas da jornada do usuário, processos frontstage, processos backstage e processos de suporte interno.

![Diagrama Blueprint](../docs/assets/Blueprint_DeployBuddy.jpg)

### 3.3.1 Jornada do Cliente

Nesta jornada do cliente, podemos identificar três cenários distintos. No primeiro, a automação do processo de deploy ocorre sem qualquer conflito, o que significa que o usuário não precisa lidar com recursos de merge ou relatórios fornecidos pelo nosso sistema.

No segundo cenário, ocorre um conflito durante o processo, e ao enviar para a nossa API de merge-solver, este é capaz de resolver o conflito. Isso resulta na geração de um arquivo de merge e um relatório que solicita a aprovação do usuário antes da finalização.

Já no terceiro cenário, quando o merge-solver não consegue resolver o conflito com alta precisão, o usuário precisa intervir manualmente. No entanto, proporcionamos uma interface visual mais intuitiva do que o método tradicional para facilitar essa resolução.

Todos esses cenários se diferenciam apenas na etapa final do processo da jornada, o que nos permite segmentá-los de forma mais personalizada e clara. O cenário principal, destacado no diagrama, é o terceiro, pois envolve a integração de vários serviços, processos e funcionalidades do nosso sistema. No segundo cenário, os elementos diferenciais foram marcados com cartões amarelos para destacar essa variação em relação à jornada principal. Embora o primeiro cenário não seja especificamente especificado no diagrama, torna-se perceptível quando ocorre, ele ocorre quando não há pontos de conflito durante o processo de merge (Fall Point), direcionando-o diretamente para a fase de implementação das mudanças no ambiente Salesforce e exibindo uma notificação de sucesso para o usuário.

- **Fazer login na plataforma**: O usuário começa fazendo login na plataforma.
- **Conectar Projeto e ambientes**: Após o login, o usuário se conecta a projetos existentes no ambiente Salesforce.
- **Realizar alterações localmente**: Esse processo representa um processo externo que não acontece na nossa plataforma, o processo de realizar qualquer tipo de alteração no projeto no Salesforce Lightning.
- **Criar Pacotes de Modificações**: Criar pacotes com as modificações feitas.
- **Rodar Pipeline de CI**: Executar o pipeline de integração contínua para validar as mudanças.
- **Houve Conflito?**:
  - **Não**:
    - **Receber Notificação de Sucesso**: O usuário recebe uma notificação de sucesso do processo.
  - **Sim**:
    - **Merge Solver conseguiu resolver?**:
      - **Sim**:
        - **Receber Notificações de Resolução e Relatório**: O sistema notifica o usuário sobre os conflitos resolvidos e entrega um relatório com as mudanças descartadas e mantidas.
        - **Aprovar Resolução**: O usuário aprova a resolução dos conflitos através do relatório fornecido.
        - **Receber Notificação de Sucesso**: Finalmente, o usuário recebe uma notificação de sucesso do processo.
      - **Não**:
        - **Receber Notificações de Conflitos**: O sistema notifica o usuário sobre os conflitos detectados.
        - **Resolver Conflitos Manualmente**: Eles são resolvidos manualmente.
        - **Receber Notificação de Sucesso**: Finalmente, o usuário recebe uma notificação de sucesso do processo.

### 3.3.2 Processos Frontstage

Aqui serão apresentados e detalhados os sistemas nos quais o usuário interage diretamente para gerenciar e monitorar seus projetos, com foco principal nos resultados de consultas e ações em nossos serviços contidos no backstage:

- **DeployBuddy Frontend**: Este é o nosso frontend desenvolvido especificamente para simplificar e automatizar o processo de deploy, utilizando um Kanban como metodologia.
- **Salesforce Lightning**: Gestão de projetos diretamente na plataforma Salesforce..
- **Slack**: Notificações e interações sobre o status do projeto e alertas de sistema.

### 3.3.3 Processos Backstage

Os processos do backstage são etapas e atividades que ocorrem nos bastidores para apoiar os acontecimentos no Frontstage, ou seja, fazem as atividade não visíveis para o usuário. Segue quais são utilizados e seu papel dentro do sistema.

- **DeployBuddy Backend**: Usada para interagir com outras plataformas e sistemas, além de também fornecer a parte de gerenciamento de dados, como usuario e projetos cadastrados.
- **Salesforce CLI**: Permite a automação e interação com as tarefas no Salesforce.
- **GitHub**: Uso do GitHub para controle de versão.
- **GitHub Actions**: Permite a automação dos workflows de CI para testes e integração.
- **Merge Solver**: API criada para a automatixação da resolução de conflitos através da OpenIA.

### 3.3.4 Processos de Suporte Interno

Os processo de Suporte Interno são aqueles as etapas internas e interações que apoiam nosso sistema na prestação do serviço. Segue quais são utilizados e seu papel dentro do sistema.

- **OpenAI API**: Utilizada internamente para otimizar processos na automação de revisões e geração de código de merge de dois arquivos.

### 3.3.5 Fluxo da solução complementar a jornada do usuário

Através da especificação do fluxo da solução, é possível compreender de forma mais abrangente o diagrama do blueprint, incluindo elementos secundários importantes para mapear os relacionamentos entre serviços e suas especificações, tais como o Tempo, Regulamentos e Políticas, Emoções e Métricas. Essa especificação será realizada ao revisitar a jornada do usuário e detalhar o processo para que cada passo ocorra:

As métricas foram mencionadas considerando aquelas já definidas e coletadas em nosso projeto, muitas delas relacionadas ao monitoramento de nossos serviços, com informações principalmente sobre o tempo de resposta sendo coletadas.

- **1. Fazer login na plataforma**: O usuário começa fazendo login na plataforma.

  - **Processos**:
    - **Frontstage**: Acesso a pagina de login (Solution Frontend)
    - **Backstage**:
      - **Sistema de gerenciamento de usuários (Backend API):** Para acesso aos usuário autorizados a acessar o sistema
      - **Autenticação (Salesforce CLI):** Utilizado para autenticar o usuário em ambiente Salesforce.
  - **Tempo**: 1 Minuto
  - **Evidência**: Redirecionamento aos projetos.
  - **Regulamentos e Políticas**: Email com dominio everymind.
  - **Emoções**: Interessado
  - **Métricas**: Tempo médio de resposta autenticação dos usuários.

- **2. Conectar Projeto e ambientes**: Após o login, o usuário se conecta a projetos existentes no ambiente Salesforce.

  - **Processos**:
    - **Frontstage**: Formulário conectar projeto (Solution Frontend)
    - **Backstage**:
      - **Sistema de gerenciamento de projeto (Backend API):** Para registar e consultar os projetos Salesforce já conectados ao sistema.
      - **Conexão (Salesforce CLI):** Conectar ao projeto no ambiente Salesforce com as informações fornecidas pelo usuário.
  - **Tempo**: 8 Minutos
  - **Evidência**: Confirmação de conexão.
  - **Regulamentos e Políticas**: Ter acesso a string de conexão
  - **Emoções**: Interessado
  - **Métricas**: Tempo médio de conexão com ambiente Salesforce

- **3. Realizar alterações localmente**: Esse processo representa um processo externo que não acontece na nossa plataforma, o processo de realizar qualquer tipo de alteração no projeto no Salesforce Lightning.

  - **Processos**:
    - **Frontstage**: Projeto Salesforce (Salesforce Lightning)
    - **Backstage**:
      - **Gerenciamento e ponte (Backend API):** Consulta das informações do projeto especifico e servindo como ponte para utilizar a CLI do Salesforce
      - **Conexão e consulta (Salesforce CLI):** Conectar ao projeto no ambiente Salesforce com a string de conexão da org e consulta das mudanças feitas no ambiente
  - **Tempo**: 8 Minutos
  - **Evidência**: 5-25 Minutos -> Dependencia com a complexidade da mudança feita pelo usuário.
  - **Regulamentos e Políticas**: Nenhuma
  - **Emoções**: Focado
  - **Métricas**: Tempo médio de conexão com ambiente Salesforce, já que nosso código identifica quando tem uma mudança.

- **4. Criar Pacotes de Modificações**: Criar pacotes com as modificações feitas.

  - **Processos**:
    - **Frontstage**: Pagina do projeto (Solution Frontend)
    - **Backstage**:
      - **Gerenciamento e ponte (Backend API):** Gerenciamento das informações do projeto e das change sets escolhidas pelo usuário e consulta no ambiente Salesforce.
      - **Pegar pacotes escolhidos (Salesforce CLI):** Pegar pacotes de metadados das change sets e criar release file.
  - **Tempo**: 5 Minutos
  - **Evidência**: Confirmação de criação (Novo Card).
  - **Regulamentos e Políticas**: Nenhuma
  - **Emoções**: Animado por ter criado pacote de changesets de uma forma facilitada e intuitiva.
  - **Métricas**: Tempo média para criação de pacote com changesets.

- **5. Rodar Pipeline de CI**: Executar o pipeline de integração contínua para validar as mudanças.
  - **Processos**:
    - **Frontstage**: Alteração de card do Kanban entre ambientes (Solution Frontend)
    - **Backstage**:
      - **Versionamento (Backend API):** Usado para versionamento da release no Git.
      - **Rodar Pipeline de CI (Github Actions):** Rodar Pipeline de integração contínua e acompanhar todos os processos ali contidos.
      - **Nova Branch (Github):** Criar nova Branch para armazenar as novas mudanças do ambiente Salesforce.
      - **Pegar as mudanças no ambiente (Salesforce CLI):** Se conectar no ambiente Salesforce e pegar as mudanças do usuário.
      - **Subir as mudança e integrar com as antigas (Github):** Subir as mudanças na branch criada e começar o processo de Merge.
      - **Testes (Salesforce CLI):** Fazer testes na Org do usuário com o Apex Testes.
      - **Pacote de release (Salesforce CLI):** Após o processo estar concluído significa que podemos criar um pacote que está pronto para ser deployado.
      - **Subir as mudanças (Salesforce CLI):** Subir as mudanças pós merge para o ambiente Salesforce.
      - **Receber notificação de sucesso (Customer Journey):** O usuário recebe uma notificação de sucesso do processo.
  - **Tempo**: 30 Minutos
  - **Evidência**: Mensagem de sucesso no slack
  - **Regulamentos e Políticas**: Nenhuma
  - **Emoções**: Agoniado com potenciais erros no começo do processo e feliz e comemorando ao final do processo.
  - **Métricas**: Taxa de erros dos testes durante a pipeline e Tempo de implementação do deploy

No Fluxo 5, temos o processo `Subir as mudanças e integrar com as antigas (GitHub): Carregar as alterações na branch criada e iniciar o processo de Merge.` Este processo apresenta um ponto de falha. No entanto, no fluxo em questão, ele não alcança esse ponto de falha. O processo seguinte mostra como o fluxo se modifica caso esse ponto de falha seja atingido.

- **5.1 Rodar Pipeline de CI**: Executar o pipeline de integração contínua para validar as mudanças.
  - **Processos**:
    - **Frontstage**: Alteração de card do Kanban entre ambientes (Solution Frontend)
    - **Backstage**:
      - **Subir as mudança e integrar com as antigas (Github):** Subir as mudanças na branch criada e começar o processo de Merge.
      - **Arquivo novo e velho (Merge Solver):** Organiza as mudanças antigas e novas para resolver conflito.
      - **Resolução de conflito (OpenIA):** Merge entre o código antigo com o novo.
      - **Notificação (Slack):** Notificação de resolução e solicitação de aprovação.
      - **Relatório (Customer Jorney):** Usuário precisa analisar o relatório com as mudanças descartadas e mantidas.
      - **Aprovar Resolução (Customer Jorney):** Usuário aprova a resolução.
      - **Receber notificação de sucesso (Customer Jorney):** O usuário recebe uma notificação de sucesso do processo.
  - **Tempo**: 30 Minutos
  - **Evidência**: Mensagem de sucesso no slack
  - **Regulamentos e Políticas**: Nenhuma
  - **Emoções**: Agoniado com potenciais erros no começo do processo, indignação por ter conflitos, aliviado pelo conflito ter sido resolvido automaticamente e feliz e comemorando ao final do processo.
  - **Métricas**: Taxa de erros dos testes durante a pipeline e Tempo de implementação do deploy

Assim como o fluxo 5 o fluxo 5.1 também apresenta um fall point no processo `Resolução de conflito (OpenIA): Merge entre o código antigo com o novo.`, O processo seguinte mostra como o fluxo se modifica caso esse ponto de falha seja atingido.

- **5.2 Rodar Pipeline de CI**: Executar o pipeline de integração contínua para validar as mudanças.
  - **Processos**:
    - **Frontstage**: Alteração de card do Kanban entre ambientes (Solution Frontend)
    - **Backstage**:
      - **Resolução de conflito (OpenIA):** Merge entre o código antigo com o novo.
      - **Notificação (Slack):** Notificação de conflito sem resolução.
      - **Resolver conflito manualmente:** Resolver os conflitos visualizado na nossa plataforma.
        - **Recebimento da resolução (Backend API):** Usuário envia as mudanças que deseja manter ou descartar.
        - **Rodar Pipeline de CI (Github Actions):** Rodar Pipeline de integração contínua e acompanhar todos os processos ali contidos.
        - **Nova Branch (Github):** Criar nova Branch para armazenar as novas mudanças do ambiente Salesforce.
        - **Pegar as mudanças no ambiente (Salesforce CLI):** Se conectar no ambiente Salesforce e pegar as mudanças do usuário.
        - **Subir as mudança e integrar com as antigas (Github):** Subir as mudanças na branch criada e começar o processo de Merge.
        - **Testes (Salesforce CLI):** Fazer testes na Org do usuário com o Apex Testes.
        - **Pacote de release (Salesforce CLI):** Após o processo estar concluído significa que podemos criar um pacote que está pronto para ser deployado.
        - **Subir as mudanças (Salesforce CLI):** Subir as mudanças pós merge para o ambiente Salesforce.
      - **Receber notificação de sucesso (Customer Jorney):** O usuário recebe uma notificação de sucesso do processo.
  - **Tempo**: 30 Minutos
  - **Evidência**: Mensagem de sucesso no slack
  - **Regulamentos e Políticas**: Nenhuma
  - **Emoções**: Agoniado com potenciais erros no começo do processo, indignação por ter conflitos, pensativo no processo de realizar as alterações manualmente e feliz e comemorando ao final do processo.
  - **Métricas**: Taxa de erros dos testes durante a pipeline e Tempo de implementação do deploy

## 3.4 Validação da jornada e do service Blueprint

Apartir do desenvolvimento das Personas, Jornada do Usuário e diagrama Blueprint, foi estruturada uma forma didática para avaliar esses artefatos com o parceiro, com o objetivo de validação de ideias, alinhamento de expectativas e aprimoramento do artefato.
Esse momento de validação ocorreu durante a Sprint Review (da sprint 2), com o representante Bruno, da Everymind, e foram coletados os seguintes feedbacks:

de 0,5 até 1,0 ponto: Além de descrito o feedback coletado junto à(ao) representante da(o) parceira(o), é feita uma reflexão crítica sobre as possibilidades de melhoria a serem implementadas na próxima sprint.

### Feedbacks coletados

- Validação da definição correta da persona "Miguel Soares", analista funcional da empresa, como uma das personas principais da solução. Isso porque essa persona reflete com precisão as principais necessidades e dores dos nossos usuários;
- Sugestão de inclusão de uma nova persona desenvolvedora, mais tecnica, que abordardem os desafios do processo de deploy de outra forma. Esta sugestão levou à criação da nossa segunda persona: a Letícia Brito, uma desenvolvedora Salesforce;
- Jornada do usuário correta e completa, e foi uma decisão eficiente criar apenas uma jornada que engloba as duas personas;
- Service Blueprint é um diagrama que da um panorama muito completo da solução, englobando muitas camadas, e foi muito bem feito;
- Textos presentes no diagrama poderiam ser um pouco maiores, e o formato do diagrama poderiam ser um pouco mais intuitivo;
- Sugestão de adição de mais uma etapa na jornada de usuário, em que o usuário pode escolher se vai considerar todos os arquivos na hora do deploy, ou só os que ele mexeu.

### Insights e melhorias

Com base nos feedbacks recebidos, foi possivel refletir sobre oportunidades de melhoria nos artefatos desenvolvidos. Isso gerou uma reflexão enriquecedora, e esse momento de validação também contribuiu para um melhor entendimento sobre os fluxos e requisitos da solução. Alguns dos insights são:

- Começar a pensar mais nos usuários tecnicos que utilizarão a solução também, tendo como foco a recém-criada Letícia Brito, para garantir que suas características, necessidades e dores sejam tão detalhadamente compreendidas quanto as de Miguel Soares;
- Revisar e adaptar o service blueprint para garantir que ele reflita com precisão as interações e processos específicos para ambas as personas, com um foco particular nos novos cenários introduzidos pela inclusão de Letícia.
- Utilizar desses materiais de entendimento do usuário de forma mais ativa no desenvolvimento, no nosso dia a dia.
- Tentar adicionar a novaa etapa proposta na escolha de arquivos para deploy, para agregar mais valor ao cliente e aos usuários finais, pensando justamente no impacto dessa escolha no dia a dia de nossas personas.

# 4. Backend

O backend da aplicação é responsável por gerenciar as regras de negócio, a comunicação com o banco de dados e a integração com outros serviços, como o Salesforce e o GitHub. Ele foi desenvolvido com base nos requisitos funcionais e não funcionais definidos, e segue as melhores práticas de desenvolvimento de software, como a separação de responsabilidades e a modularização do código.

## 4.1 Configuração e Instalação

### Clonagem do Repositório

```bash
git clone https://github.com/Inteli-College/2024-1B-T03-ES10-G02/
cd 2024-1B-T03-ES10-G02
```

### Pré-requisitos

- Node.js
- Docker
- Golang: Para rodar a aplicação em modo de desenvolvimento
- Make: Para rodar os comandos do Makefile

#### Instalação do Node.js

Instalação do NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

zsh # or `bash` if you use bash
```

Instalação e uso do Node.js LTS:

```bash
nvm install --lts
nvm use --lts
```

#### Instalação do Docker

Para a instalação do Docker o ideal é seguir a documentação oficial: [Get Docker](https://docs.docker.com/get-docker/)

#### Instalação do Golang

Para a instalação do Golang o ideal é seguir a documentação oficial: [Getting Started](https://golang.org/doc/install)

#### Instalação do Make

<!-- Mac Installation
For MacOS users, first make sure to first have Xcode installed (from the App store), then in the terminal enter the command

xcode-select --install
Linux/Ubuntu Installation
For Linux/Ubuntu, if you do not have it try

sudo apt-get install build-essential -->

Mac Installation:

- Usando Homebrew:

  ```bash
  brew install make
  ```

- Sem Homebrew:
  ```bash
  xcode-select --install
  ```

Linux/Ubuntu Installation:

```bash
sudo apt-get install build-essential
```

### Configuração do Ambiente

Crie um arquivo `.env` a partir do exemplo fornecido:

```bash
cp .env.example .env
```

### Inicialização do Ambiente de Desenvolvimento

Utilize o Docker Compose para desenvolvimento:

```bash
make dev
```

Esse comando irá iniciar o ambiente de desenvolvimento, com o backend rodando em modo de desenvolvimento rodando localmente e o banco de dados PostgreSQL, rodando em um contêiner Docker.

### Inicialização do Ambiente de Produção

Prepare e inicie o ambiente de produção:

```bash
make prod
```

Esse comando irá preparar o ambiente de produção, com o backend rodando em modo de produção e o banco de dados PostgreSQL, rodando em um contêiner Docker.

## 4.2 Arquitetura e tecnologias

### Dockerfile e Docker Compose

Detalhamento dos processos de construção de imagens e gerenciamento de contêineres para desenvolvimento e produção.

### Makefile

O Makefile é responsável por gerenciar os processos de desenvolvimento, teste, deploy, build, e limpeza do ambiente, facilitando a execução de tarefas comuns.

Dentro do Makefile, temos os seguintes targets:

- `dev`: Inicia o servidor em modo de desenvolvimento.
- `prod`: Inicia o servidor em modo de produção.
- `reset-dev`: Para e remove o contêiner do banco de dados em modo de desenvolvimento.
- `reset-prod`: Para e remove o contêiner do banco de dados em modo de produção.
- `test`: Executa os testes unitários.
- `deploy`: Realiza o deploy da aplicação.
- `build`: Compila a aplicação.
- `clean`: Remove arquivos temporários e limpa o ambiente.

## 4.3 Documentação da API

Abaixo, foram documentados os endpoints implementados até o momento. No decorrer do desenvolvimento das sprints, essa seção será atualizada.

### Endpoints

#### 1. Criar Usuário

- **POST** `/api/v1/users`
- **Descrição**: Cria um novo usuário no sistema.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Marselo",
    "username": "marcelofeitoza",
    "email": "marcelo@email.com",
    "password": "password"
  }
  ```
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:
  - **Código 201 (Created)**: Usuário criado com sucesso.
    ```json
    {
      "id": "123",
      "name": "Marselo",
      "username": "marcelofeitoza",
      "email": "marcelo@email.com"
    }
    ```
  - **Código 400 (Bad Request)**: Falha ao criar usuário devido a dados inválidos.
    ```json
    {
      "error": "Dados de entrada inválidos"
    }
    ```

#### 2. Autenticar Usuário

- **POST** `/api/v1/users/auth`
- **Descrição**: Autentica um usuário existente.
- **Corpo da Requisição**:
  ```json
  {
    "email": "marcelo@email.com",
    "password": "password"
  }
  ```
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:
  - **Código 200 (OK)**: Autenticação bem-sucedida.
    ```json
    {
      "token": "jwt-token-aqui"
    }
    ```
  - **Código 401 (Unauthorized)**: Credenciais inválidas.
    ```json
    {
      "error": "Credenciais inválidas"
    }
    ```

#### 3. Atualizar Usuário

- **PUT** `/api/v1/users/:id`
- **Descrição**: Atualiza os dados de um usuário existente.
- **Parâmetros URL**:
  - `id`: ID do usuário a ser atualizado.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Marselo",
    "username": "marcelofeitoza",
    "email": "marcelo@update.com",
    "password": "newpassword"
  }
  ```
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:
  - **Código 200 (OK)**: Usuário atualizado com sucesso.
    ```json
    {
      "id": "123",
      "name": "Marselo",
      "username": "marcelofeitoza",
      "email": "marcelo@update.com"
    }
    ```
  - **Código 404 (Not Found)**: Usuário não encontrado.
    ```json
    {
      "error": "Usuário não encontrado"
    }
    ```

#### 4. Gerenciar DevOps

- **POST** `/api/v1/devops`
- **Descrição**: Cria uma nova configuração de DevOps no sistema.
- **Corpo da Requisição**:
  ```json
  {
    "string_connection": "force://PlatformCLI::5Aep861JXR2zRHPQHKHAsdpVKn8nlJHlneb2kdqywji1QF4fGlIh.5iwgdPJVp83UD.RETotXjsTFDfwFjmvlXn@resourceful-goat-gcylma-dev-ed.trailblaze.my.salesforce.com",
    "name": "teste1",
    "repo_name": "2024-1B-T03-ES10-G02-SF",
    "owner": "Inteli-College"
  }
  ```
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:

  - **Código 200 (OK)**: Configuração de DevOps criada com sucesso.

    ```json
    {
      "elapsed_time": "14.072166ms",
      "message": "Organization created successfully"
    }
    ```

  - **Código 400 (Bad Request)**: Falha na criação devido a dados inválidos.
    ```json
    {
      "error": "Failed to create user",
      "message": "organization already exists"
    }
    ```

#### 5. Aprovar Usuário

- **POST** `/api/v1/users/approve/:id`
- **Descrição**: Aprova um usuário pendente.
- **Parâmetros URL**:
  - `id`: ID do usuário a ser aprovado.
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:
  - **Código 200 (OK)**: Usuário aprovado com sucesso.
    ```json
    {
      "message": "User approved"
    }
    ```
  - **Código 500 (Internal Server Error)**: Falha ao aprovar usuário.
    ```json
    {
      "error": "Failed to approve user"
    }
    ```

#### 6. Rejeitar Usuário

- **POST** `/api/v1/users/auth`
- **Descrição**: Rejeita um usuário pendente.
- **Cabeçalhos**:
  - User-Agent: insomnia/9.0.0
- **Resposta Esperada**:
  - **Código 200 (OK)**: Usuário rejeitado com sucesso.
    ```json
    {
      "message": "User rejected"
    }
    ```
  - **Código 500 (Internal Server Error)**: Falha ao rejeitar usuário.
    ```json
    {
      "error": "Failed to reject user"
    }
    ```

#### 7. Obter Usuários

- **GET** `/api/v1/users`
- **Descrição**: Lista todos os usuários.
- **Cabeçalhos**:
  - User-Agent: insomnia/8.6.1
- **Resposta Esperada**:
  - **Código 200 (OK)**: Lista de usuários retornada com sucesso.
    ```json
    [
      {
        "id": "298ac97c-e88b-4725-b681-02c1336bbfbd",
        "created_at": "2024-05-10T13:39:26.51928-03:00",
        "updated_at": "2024-05-10T13:40:20.698601-03:00",
        "deleted_at": null,
        "name": "Marselo",
        "username": "marcelofeitoza",
        "email": "marcelo@email.com",
        "password": "$2a$10$Nx2JMelkeCPXkVjC4K1Q6.IonLloQt.i6nwBw/ojCCQJopWljKvmW",
        "IsApproved": true,
        "ghp": "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      },
      {
        "id": "6ca729b9-54bf-4269-bf17-5eb70e2123d2",
        "created_at": "2024-05-10T13:40:42.052272-03:00",
        "updated_at": "2024-05-10T13:40:42.047177-03:00",
        "deleted_at": null,
        "name": "Marselo",
        "username": "marcelofeitoza",
        "email": "marcelo@email.com",
        "password": "$2a$10$8PlvKNiKUhFszWAJZ5BlWumTnFa09nC4404/oxyR/K0VRwnQW14mK",
        "IsApproved": false,
        "ghp": "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    ]
    ```
  - **Código 401 (Unauthorized)**: Falha na autenticação.
    ```json
    {
      "error": "Unauthorized"
    }
    ```

#### 8. Atualizar Usuário

- **PUT** `/api/v1/users/:id`
- **Descrição**: Atualiza detalhes de um usuário.
- **Parâmetros URL**:
  - `id`: ID do usuário a ser atualizado.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Marselo",
    "username": "marcelofeitoza",
    "email": "marcelo@update.com",
    "password": "newpassword",
    "ghp": "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
  ```
- **Cabeçalhos**:
  - Content-Type: application/json
- **Resposta Esperada**:

  - **Código 200 (OK)**: Usuário atualizado com sucesso.

    ```json
    {
      "id": "6ca729b9-54bf-4269-bf17-5eb70e2123d2",
      "created_at": "2024-05-10T13:40:42.052272-03:00",
      "updated_at": "2024-05-10T13:40:42.047177-03:00",
      "deleted_at": null,
      "name": "Marselo",
      "username": "marcelofeitoza",
      "email": "marcelo@email.com",
      "password": "$2a$10$8PlvKNiKUhFszWAJZ5BlWumTnFa09nC4404/oxyR/K0VRwnQW14mK",
      "IsApproved": false,
      "ghp": "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
    ```

  - **Código 500 (Internal Server Error)**: Falha ao atualizar usuário.
    ```json
    {
      "error": "Failed to update user"
    }
    ```

### 4.4 Segurança

Cada endpoint que requer autenticação utiliza um token JWT que deve ser fornecido no cabeçalho da requisição. Esse token armazena tanto sua validade, que é de 24 horas, quanto o ID do usuário autenticado, facilitando a identificação do usuário em cada requisição.

```http
Authorization: Bearer your-jwt-token-here
```

## 4.5 Testes realizados

Foram realizados testes para os endpoints implementados, com o objetivo de contribuir para a qualidade do software desenvolvido.
A documentação dos testes pode ser acessada [aqui](../tests.md).

## 4.6 Limpeza e Manutenção

Comandos para limpar o ambiente e resetar contêineres, facilitando a manutenção regular do ambiente de desenvolvimento.

```bash
make clean
```

# 5. Frontend

O frontend da aplicação é a interface gráfica que usuário utilizará para interagir com o sistema, e foi desenvolvido com base no protótipo do figma, que pode ser acessado [aqui](../docs/prototipacao.md).

O desenvolvimento, tanto do protótipo quanto da implementação da interface, está seguindo principios de UX (User Experience), em que os usuários da aplicação (nossas [personas](#31-personas)), e suas necessidades, estão no centro e são nosso principal foco para tomada de decisões de design.

Nesse sentido, pensando em uma entrega incremental que agrega o máximo de valor para o cliente e para os usuários, a implementação, até o momento, cobre a parte gráfica de algumas das nossas principais <b>features</b>, segundo a definição de nossos [Requisitos](../docs/requisitos.md/#requisitos-funcionais). Algumas das features implementadas são:

- Login no sistema (RF10);
- Kanban para deploy em ambientes de desenvolvimento, homologação e produção (RF1, RF2 e RF3);
- Página "Home" para acesso a informações importantes, como os projetos em que o usuário está contribuindo;
- Página de Gerenciamento de alterações, que contém o Kanban que roda as pipelines de deploy

Tudo isso foi desenvolvido de forma modularizada e componentizada, gerando um desacoplamento do código, fácil manutenção e reutilização de código. Além disso, foram feitas escolhas de design visando uma alta usabilidade, no que diz respeito às cores e contrastes, por exemplo, seguindo o [RNF1](../docs/requisitos.md/#tabela-de-requisitos-não-funcionais).

![kanban](../docs/assets/kanban-front.png)

## 5.1 Tecnologias

- React.js
- Typescript
- Styled Components (estilização)
- Cypress (testes)

A implementação foi feita com React.js, um framework que traz conceitos de componentização, por exemplo, que facilitam muito o desenvolvimento, manutenção e realização de testes do código desenvolvido.

## 5.2 Como rodar

1. Após clonar este repositório na sua máquina, estando na raiz do projeto, abra o terminal e navegue até:

-     "src/client"

2. Para instalar todas as dependencias necessárias:

-     npm i

3. Para rodar o frontend:

-     npm run start

4. Será aberta uma guia em seu navegador, que direciona para '[http//:localhost:3000](http://localhost:3000)', em que você pode acessar a interface.
