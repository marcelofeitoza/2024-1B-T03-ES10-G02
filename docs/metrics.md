# Métricas
## Sumário
- [Métricas](#métricas)
  - [Sumário](#sumário)
- [Definição de métricas](#definição-de-métricas)
  - [Métricas de negócio](#métricas-de-negócio)
    - [1. Métrica: Total Effort (h)](#1-métrica-total-effort-h)
    - [2. Métrica: Vazão diária](#2-métrica-vazão-diária)
    - [3. Métrica: Cycle Time](#3-métrica-cycle-time)
    - [4. Métrica: Work Items](#4-métrica-work-items)
    - [5. Métrica: Total Commits](#5-métrica-total-commits)
    - [6. Métrica: NPS - qualidade](#6-métrica-nps---qualidade)
    - [7. Métrica: NPS - expectativas](#7-métrica-nps---expectativas)
  - [Métricas técnicas](#métricas-técnicas)
    - [1. Quantidade de bugs](#1-quantidade-de-bugs)
    - [2. Índice de qualidade do código](#2-índice-de-qualidade-do-código)
    - [3. Tempo de implementação do deploy](#3-tempo-de-implementação-do-deploy)
    - [4. Tempo de resolução de bugs](#4-tempo-de-resolução-de-bugs)
    - [5. Cobertura de testes](#5-cobertura-de-testes)
    - [6. Taxa de Sucesso do Deploy](#6-taxa-de-sucesso-do-deploy)
    - [7. Repositório de coleta](#7-repositório-de-coleta)
      - [Repositório de métricas de produtividade do time:](#repositório-de-métricas-de-produtividade-do-time)
      - [Repositório de métricas de desempenho da solução:](#repositório-de-métricas-de-desempenho-da-solução)
      - [Insights](#insights)
        - [Sprint 1](#sprint-1)
    - [8. Métricas de API](#8---métricas-de-api)
      - [Descrição das Métricas](#descrição-das-métricas)
      - [Métricas Detalhadas](#métricas-detalhadas)
      - [Responsabilidades](#responsabilidades)
      - [Detalhamento das Métricas por Rota da API](#detalhamento-das-métricas-por-rota-da-api)
        - [Métricas Detalhadas por Rota](#métricas-detalhadas-por-rota)
        - [Monitoramento e Ações](#monitoramento-e-ações)
        - [Tempo de Resposta Após Otimização Assíncrona](#tempo-de-resposta-após-otimização-assíncrona)
    
# Definição de métricas
Foram definidas métricas de negócio (1-7), com o objetivo de facilitar o gerenciamento da produtividade do time, gerando insights que facilitam a identificação de gargalos nos processos realizados.
Além disso, foram definidas métricas do âmbito técnico (8-13), para direcionar o desenvolvimento da solução em si. Essas métricas específicas serão acompanhadas apenas depois da implementação 

## Métricas de negócio

### 1. Métrica: Total Effort (h)

**Descrição:**
Representa a soma da quantidade de horas de esforço (Effort) de todos os work items da sprint

**Tipo de Métrica:**
Produtividade do time

**Unidade de Medida:**
Horas

**Frequência de Coleta:**
A coleta é realizada de forma contínua pelo Azure DevOps, e a atualização do repositório de métricas deve ser feita 1x por Sprint, no último dia de cada Sprint

**Ferramenta de Monitoramento:**
Azure DevOps

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum Master da sprint em andamento

**Ações Baseadas na Métrica:**
- Se o valor for menor que 64 horas (8 integrantes x 8h): Buscar por gargalos de produtividade no time, buscar por mais precisão na estimação do Effort das tarefas na próxima sprint - para que possamos aproveitar nosso tempo de desenvolvimento da melhor forma
- Se o valor for maior que 80h: Investigar se existem integrantes trabalhando muito mais do que o necessário, ou se as tarefas foram estimadas erroneamente;
De forma geral, se o valor fugir do comportamento esperado - entre 64 e 80h - revisar o processo de do backlog de cada sprint

### 2. Métrica: Vazão diária
**Descrição:**
Representa a quantidade média de work itens realizados por dia pelo time de desenvolvimento

**Tipo de Métrica:**
Produtividade do time

**Unidade de Medida:**
Número discreto

**Frequência de Coleta:**
A coleta é realizada de forma contínua pelo Azure DevOps, e a atualização do repositório de métricas deve ser feita 1x por Sprint, no último dia de cada Sprint

**Ferramenta de Monitoramento:**
Azure DevOps

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum Master da sprint em andamento

**Ações Baseadas na Métrica:**
Se o valor fugir do esperado (entre 8 oe 16 work items): reestruturar tamanho das tarefas, pois o ideal é que cada integrante realize pelo menos 1 tarefa por dia, de no máximo 1h cada

### 3. Métrica: Cycle Time
**Descrição:**
Representa o período entre o início do ciclo de realização de um work item até o final - no caso, começa a ser contado quando um item é atualizado para "In progress", e termina quando é atualizado para "Done"

**Tipo de Métrica:**
Produtividade do time

**Unidade de Medida:**
Horas

**Frequência de Coleta:**
A coleta é realizada de forma contínua pelo Azure DevOps, e a atualização do repositório de métricas deve ser feita 1x por Sprint, no último dia de cada Sprint

**Ferramenta de Monitoramento:**
Azure DevOps

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum Master da sprint em andamento

**Ações Baseadas na Métrica:**
Se o valor médio for maior que 2h, procurar por gargalos no ciclo do item, para identificar qual etapa está levando mais tempo que o necessário (In Progress, To document, ou To validate). Dessa forma, é possivel direcionar esforços para um alvo específico

### 4. Métrica: Work Items
**Descrição:**
Representa a quantidade total de work itens realizados na sprint

**Tipo de Métrica:**
Produtividade do time

**Unidade de Medida:**
Número discreto

**Frequência de Coleta:**
A coleta é realizada de forma contínua pelo Azure DevOps, e a atualização do repositório de métricas deve ser feita 1x por Sprint, no último dia de cada Sprint

**Ferramenta de Monitoramento:**
Azure DevOps

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum Master da sprint em andamento

**Ações Baseadas na Métrica:**
- Se o valor for menor que 64 (8 dias de desenvolvimento x 8 integrantes): Destrinchar mais os artefatos na hora da criação do backlog da sprint

### 5. Métrica: Total Commits
**Descrição:**
Representa a quantidade total de commits realizados na sprint

**Tipo de Métrica:**
Produtividade do time

**Unidade de Medida:**
Número discreto

**Frequência de Coleta:**
A atualização do repositório de métricas deve ser feita 1x por Sprint, no último dia de cada Sprint

**Ferramenta de Monitoramento:**
Github Insights

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum Master da sprint em andamento

**Ações Baseadas na Métrica:**
Independente do valor, fazer comparação entre o valor das coletas anteriores, e realizar uma análise para entender a diminuição ou aumento em relação à(s) sprint(s) anterior(es)

### 6. Métrica: NPS - qualidade
**Descrição:**
NPS médio relacionado à qualidade da entrega da sprint - avaliado por professores, alunos e convidados

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Escala - 0 a 5

**Frequência de Coleta:**
A coleta deve ser realizada 1x por sprint - na Sprint review

**Ferramenta de Monitoramento:**
Google Forms (interno)

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Encarregado de montar a apresentação da Sprint Review

**Ações Baseadas na Métrica:**
- Se o valor médio for entre 4-5: manter o nível alto de entrega. 
- Se o valor médio for entre 0-3: reavaliar o desenvolvimento do time e a entrega de valor na Sprint Review, tomando medidas para que na próxima sprint possamos resolver os problemas identificados

### 7. Métrica: NPS - expectativas
**Descrição:**
NPS médio relacionado ao atendimento de expectativas com a entrega da sprint - avaliado por professores, alunos e convidados

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Escala - 0 a 5

**Frequência de Coleta:**
A coleta deve ser realizada 1x por sprint - na Sprint review

**Ferramenta de Monitoramento:**
Google Forms (interno)

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Encarregado de montar a apresentação da Sprint Review

**Ações Baseadas na Métrica:**
- Se o valor médio for entre 3-5: a comunicação com o parceiro, e entrega de valor estão bons
- Se menor do que 3, reavaliar as prioridades do time e conceito de entrega de valor, para adressar os problemas identificados e compensar nas próximas sprint

## Métricas técnicas

### 1. Quantidade de bugs
**Descrição:**
Avaliação da estabilidade e qualidade do sistema com base no número de falhas ou defeitos identificados

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Número total de bugs

**Frequência de Coleta:**
A coleta deve ser realizada por sprint

**Ferramenta de Monitoramento:**
Github Insights

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum master da sprint

**Ações Baseadas na Métrica:**
- Melhorar práticas de codificação e revisão de código se a pontuação for baixa

### 2. Índice de qualidade do código
**Descrição:**
Avaliação da qualidade geral do código com base em critérios como legibilidade, manutenção e conformidade com padrões de codificação

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Pontuação

**Frequência de Coleta:**
A coleta deve ser realizada por semana

**Ferramenta de Monitoramento:**
SonarquBe

**Threshold de Alerta:**
Pontuação abaixo de 80

**Responsável pela Métrica:**
Scrum master da sprint

**Ações Baseadas na Métrica:**
- Melhorar práticas de codificação e revisão de código se a pontuação for baixa

### 3. Tempo de implementação do deploy
**Descrição:**
Período necessário para completar o processo de deploy de uma atualização ou correção no ambiente de produção

**Tipo de Métrica:**
Desempenho

**Unidade de Medida:**
Minutos

**Frequência de Coleta:**
Em todos os deploys

**Ferramenta de Monitoramento:**
Github

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Responsável pelo deploy

**Ações Baseadas na Métrica:**
- Investigar e otimizar o pipeline de CI/CD se os deploys estiverem demorando muito.

### 4. Tempo de resolução de bugs
**Descrição:**
 Intervalo entre o registro e a resolução de um bug
 
**Tipo de Métrica:**
Eficiência

**Unidade de Medida:**
Horas

**Frequência de Coleta:**
Real-Time

**Ferramenta de Monitoramento:**
Github

**Threshold de Alerta:**
N/A

**Responsável pela Métrica:**
Scrum master da sprint

**Ações Baseadas na Métrica:**
- Priorizar a resolução de bugs críticos e melhorar a eficácia da equipe de suporte.

### 5. Cobertura de testes
**Descrição:**
Percentual de código e metadados cobertos por testes antes do deploy

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Percentual (%)

**Frequência de Coleta:**
Sprint

**Ferramenta de Monitoramento:**
Cypress

**Threshold de Alerta:**
Menos de 70% de cobertura

**Responsável pela Métrica:**
Scrum master da sprint

**Ações Baseadas na Métrica:**
- Busca por aumentar a cobertura dos testes que estiverem abaixo do esperado ou desejado para aquele tipo

### 6. Taxa de Sucesso do Deploy
**Descrição:**
Porcentagem de deploys realizados com sucesso, sem erros que interrompam ou revertam o processo

**Tipo de Métrica:**
Qualidade

**Unidade de Medida:**
Percentual (%)

**Frequência de Coleta:**
Ao fim de cada sprint 

**Ferramenta de Monitoramento:**
Github

**Threshold de Alerta:**
Menos de 90% de sucesso

**Responsável pela Métrica:**
Scrum master da sprint

**Ações Baseadas na Métrica:**
- Analisar e resolver as falhas em cada um dos deploys, visando que os mesmos erros não ocorram novamente
  
### 7. Repositório de coleta
Na etapa em que nos encontramos (sprint 1), a coleta de métricas desenvolvimento da solução ainda não foi feita, visto que a implementação técnica da solução ainda não foi iniciada.

Porém, em relação às métricas de produtividade do time (de negócios),grande parte foi coletada de forma automatizada através da ferramenta de Analytics do AzureDevOps, visando diminuir erros humanos e otimizar o processo de coleta.

### 8 - Métricas de API
As métricas de API são essenciais para monitorar a eficiência e a eficácia das interações entre os clientes (cli e frontend) e o servidor. Essas métricas ajudam a identificar áreas de melhoria na infraestrutura da API e nos endpoints específicos.

#### Descrição das Métricas
1. **Rotas da API**: Lista de rotas da API com detalhes sobre o tempo médio de resposta, status HTTP mais comum e mensagem de resposta típica.
2. **Tempo de Resposta**: Tempo médio que cada rota leva para responder a uma requisição.
3. **Status Mais Comum**: Status HTTP mais frequentemente retornado por cada rota.
4. **Mensagem de Resposta Típica**: Mensagem de retorno mais comum para cada rota.
5. **Descrição**: Breve descrição da rota e sua finalidade.

#### Métricas Detalhadas

| Métrica              | Descrição                                 | Unidade de Medida  | Threshold de Alerta |
| -------------------- | ----------------------------------------- | ------------------ | ------------------- |
| Tempo de Resposta    | Tempo médio de resposta por rota          | Milissegundos (ms) | > 1000 ms           |
| Status Mais Comum    | Status HTTP mais frequentemente retornado | Código HTTP        | 4XX, 5XX            |
| Mensagem de Resposta | Mensagem de retorno mais comum por rota   | JSON               | { "error": "..." }  |
| Descrição            | Breve descrição da rota e sua finalidade  | Texto              | N/A                 |

#### Responsabilidades
- **Responsável pela Métrica**: Qualquer membro do time de desenvolvimento, com foco especial no Scrum Master e no time de DevOps.
- **Ações Baseadas na Métrica**: Melhorias contínuas na documentação da API, ajustes na infraestrutura, e refinamento dos endpoints para melhorar o tempo de resposta e a taxa de sucesso.

Essa subseção fornece uma visão clara das métricas que são importantes para manter a saúde e eficácia da API. Se você achar que algo precisa ser ajustado ou adicionado, fique à vontade para me informar!

#### Detalhamento das Métricas por Rota da API

A tabela abaixo resume as métricas chave por rota da API, fornecendo detalhes essenciais sobre o desempenho de cada endpoint específico. Isso permite um monitoramento mais efetivo e ações direcionadas para otimização conforme necessário.

| Método | Rota                         | Tempo Médio de Resposta | Status Mais Comum | Mensagem de Resposta Típica                | Descrição                                  |
| ------ | ---------------------------- | ----------------------- | ----------------- | ------------------------------------------ | ------------------------------------------ |
| POST   | `/api/v1/users`              | 136 ms                  | 201 Created       | New user created successfully              | Novo usuário criado com sucesso            |
| POST   | `/api/v1/users/approve/{id}` | 40.5 ms                 | 200 OK            | User approved                              | Usuário aprovado                           |
| PUT    | `/api/v1/users/{id}`         | 113 ms                  | 200 OK            | User updated successfully                  | Usuário atualizado com sucesso             |
| POST   | `/api/v1/users/auth`         | 112 ms                  | 200 OK            | Authentication successful, token generated | Autenticação bem-sucedida, token gerado    |
| GET    | `/api/v1/users`              | 9.89 ms                 | 200 OK            | Users data retrieved successfully          | Dados dos usuários recuperados com sucesso |
| GET    | `/api/v1/users/{uuid}`       | 7.05 ms                 | 200 OK            | User data retrieved successfully           | Dados do usuário recuperados com sucesso   |
| POST   | `/api/v1/devops`             | 14.072 ms               | 201 Created       | Organization created successfully          | Organização criada com sucesso             |

##### Métricas Detalhadas por Rota
- **Tempo de Resposta**: Representa a média de tempo que cada rota leva para responder a uma requisição. Importante para identificar gargalos de performance.
- **Status Mais Comum**: O status HTTP que é mais frequentemente retornado, ajudando a identificar se as requisições estão sendo processadas com sucesso.
- **Mensagem de Resposta Típica**: Ajuda a verificar se as mensagens de resposta estão adequadas e se correspondem às expectativas dos usuários da API.

##### Monitoramento e Ações
- **Frequência de Monitoramento**: Contínuo, com relatórios detalhados gerados ao final de cada sprint.
- **Ferramentas Utilizadas**: Prometheus para coleta e Grafana para visualização.
- **Ações de Otimização**: Baseadas nas métricas coletadas, ações como ajuste de carga, revisão de código ou escalabilidade da infraestrutura podem ser necessárias.

##### Tempo de Resposta Após Otimização Assíncrona

Como exemplo dessas métricas de API, temos a seguinte situação de otimização de performance que resultou em uma melhoria de 13.37 segundos para 4.93 milissegundos, aproximadamente 2700x mais rápido:

**Tipo de métrica:**
Desempenho

**Unidade de Medida:**
Milissegundos (ms)

**Ferramenta de Monitoramento:**
Ferramentas internas de logging e monitoramento de performance.

**Ações Baseadas na Métrica:**
- Continuar a implementação e otimização de operações assíncronas em outras partes do sistema para melhorar a resposta geral da API.
- Monitorar continuamente o tempo de resposta para detectar quaisquer regressões ou novas oportunidades de otimização.

**Resultados Observados:**
- **Antes da Otimização**: 13370.12 milissegundos
- **Após a Otimização**: 4.93 milissegundos

**Otimização Realizada:**
```go
// Antes da Otimização
repo.RetrieveMetadatas(user, org, user.Username, user.GHP, owner, repoName)

// Após a Otimização - Implementação Assíncrona
go repo.RetrieveMetadatas(user, org, user.Username, user.GHP, owner, repoName)
```


Essa pequena mudança de uma chamada de função na thread principal para uma thread paralela resultou em uma melhoria significativa no tempo de resposta da API.

Isso ocorreu porque a operação de recuperação de metadados foi movida para uma **goroutine** separada, permitindo que a API continuasse a responder a outras solicitações enquanto aguardava a conclusão da operação assíncrona. As ações sendo executadas nessa goroutine isolada são:
1. Autenticação do usuário e criação de um token de acesso usando Salesforce DX.
2. Recuperação de metadados do Salesforce usando o Salesforce CLI.
3. Criação de um novo branch no repositório do GitHub.
4. Adição dos arquivos de metadados ao repositório do GitHub.
5. Abertura de um pull request para revisão e merge dos arquivos
6. Notificação no Slack sobre a criação do pull request
7. Retorno da mensagem de sucesso após a conclusão de todas as etapas.
   
> 🐹 Uma **goroutine** é uma função que é executada de forma concorrente com outras funções. Ela é leve, permitindo que várias goroutines sejam executadas simultaneamente em um único thread. Isso é ideal para operações assíncronas que não bloqueiam a execução do programa principal.

#### Repositório de métricas de produtividade do time:

| Métrica            | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Sprint 5 |
| ------------------ | -------- | -------- | -------- | -------- | -------- |
| Effort total (h)   | 36       | 74       | -        | -        | -        |
| Vazão diária       | N/A      | N/A      | -        | -        | -        |
| Cycle Time         | N/A      | 24       | -        | -        | -        |
| Work Items         | 32       | 48       | -        | -        | -        |
| Commits            | 60       | 135        | -        | -        | -        |
| NPS - qualidade    | 4.8      | 5        | -        | -        | -        |
| NPS - expectativas | 4.3      | 5        | -        | -        | -        |

#### Repositório de métricas de desempenho da solução:

| Métrica                          | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Sprint 5 |
| -------------------------------- | -------- | -------- | -------- | -------- | -------- |
| Quantidade de bugs               | 0        | 0        | -        | -        | -        |
| Índice de qualidade do código    | N/A      | N/A        | -        | -        | -        |
| Tempo de implementação do deploy | N/A      | N/A        | -        | -        | -        |
| Tempo de resolução de bugs       | N/A      | N/A        | -        | -        | -        |
| Cobertura de testes              | N/A      | N/A        | -        | -        | -        |
| Taxa de Sucesso do Deploy        | N/A      | N/A        | -        | -        | -        |

#### Insights

##### Sprint 1
A partir dos valores coletados nessa sprint, foram identificados pontos de melhoria principalmente no que diz respeito à produtividade do time de desenvolvimento.
Nesse contexto, podem ser definidos como pontos de melhora:
- Destrinchar os artefatos em um backlog da sprint com mais work items;
- Definir o effort dos workitems com maior precisão, e logo na criação dos cards;
- Resolver a dificuldade de permissionamento do Azure DevOps para itegração com sistema de insights de Cycle Time e Vazão Diária.

##### Sprint 2
Ao analisar as métricas coletadas, é possivel perceber algumas melhorias em relação à sprint anterior, como:
- Effort total muito próximo de 80 horas, considerado o valor ideal para o desenvolvimento na sprint. (média de 10h por integrante, aproximadamente, referentes a 8 dias de desenvolvimento, cada um contendo 1h);
- Os valores de NPS, tanto em relação a qualidade quanto ao atendimento de expectativas, aumentaram em relação a sprint anterior, atingindo valor máximo.
- Mesmo ainda não sendo uma quantidade ideal, a quantidade de work items aumentou, o que é bom, pois estamos destrinchando mais as tarefas.

Além disso, também foram identificados pontos de melhoria:
- Maior automatização da coleta das métricas do Azure DevOps;
- Definição de workitems menores;
- Atualização em tempo real do kanban de tarefas, tornando as métricas de vazão diária e cycle time mais precisas.
 
