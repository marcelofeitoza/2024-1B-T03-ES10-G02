# Requisitos 
Neste documento se encontram os requisitos da solução, estruturados no formato de user stories. Cada requisito foi projetado para expressar de forma clara uma necessidade específica dos usuários, como o Miguel, um analista funcional da EveryMind - nossa principal Persona. 
Os requisitos estão categorizados por features, facilitando a visão do escopo e a priorização das tarefas de desenvolvimento. Essa estrutura é essencial para garantir que as funcionalidades desenvolvidas estejam alinhadas com as expectativas dos usuários e as metas do projeto. 

As tabelas a seguir contemplam os requisitos funcionais (RF) e não funcionais (RNF) do sistema, cada um contendo:
  - **Feature ou categoria** do requisito;
  - **Tipo do requisito** - RF ou RNF;
  - **Status** - To-do, In progress e Done - para facilitar um gerenciamento e o acompanhamento da implementação ao longo do projeto.

## Requisitos Funcionais 

| Feature                | Requisito                                                                                                           | Tipo | Status       |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------|
| **Gerenciamento de Deploy** | Como Miguel, analista funcional na Everymind, eu gostaria de fazer o deploy do meu repositório em ambiente de desenvolvimento, para contribuir para a realização de mudanças de forma paralela com meu time. | RF1                | To start |
| **Gerenciamento de Deploy**| Como Miguel, analista funcional na Everymind, eu quero fazer o deploy do meu repositório em ambiente de homologação, para que minha solução possa ser testada de forma segura.              |       RF2                | To-do |
|**Gerenciamento de Deploy**| Como Miguel, analista funcional na Everymind, eu quero fazer o deploy do meu repositório em ambiente de produção, para que haja um versionamento seguro dos arquivos na versão oficial da solução | RF3                | To-do |
|**Gerenciamento de Deploy**| Como Miguel, quero poder reverter facilmente um deploy que causou problemas (rollback), para garantir a estabilidade e continuidade das operações no ambiente de produção. | RF4                | To-do |
| **Resolução de Conflitos**  | Como Miguel, analista funcional na Everymind, eu quero um processo de merge de branches sem termos técnicos, para que seja possível uma resolução de conflitos simples sem perda de alterações realizadas.        | RF5                | To-do |
|**Resolução de Conflitos**| Como Miguel, analista funcional na Everymind, eu quero receber possíveis resoluções de conflitos de forma automática.                                                                         | RF6                | To-do |
|**Resolução de Conflitos** | Como Miguel, analista funcional na Everymind, eu quero visualizar e comparar as alterações conflitantes lado a lado, para que eu possa entender as diferenças e decidir como resolver os conflitos. | RF7                | To-do |
|**Resolução de Conflitos**| Como Miguel, analista funcional na Everymind, eu quero um relatório dos conflitos resolvidos durante o merge, incluindo as alterações mantidas e as descartadas, para que eu possa ter um registro das decisões tomadas nos conflitos durante o merge. | RF8                | To-do |
|**Resolução de Conflitos**| Como Miguel, analista funcional na Everymind, eu quero ser notificado sobre conflitos de merge detectados durante o deploy através de alertas, para que eu possa verificar e resolver os conflitos do merge. | RF9                | To-do |
|**Acessibilidade e Usabilidade**| Como Miguel, analista funcional na Everymind, eu quero fazer login na plataforma para conseguir acessar o sistema.                                                                          | RF10                | To-do |


### Tabela de Requisitos não Funcionais 

| Categoria                | Requisito                                                                                                           | Tipo | Status       |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------|
|**Acessibilidade e Usabilidade**| Como Miguel, analista funcional na Everymind, eu quero uma interface com cores e estratégias visuais para facilitar o entendimento dos processos realizados.              | RNF1               | To-do |
| **Escalabilidade**        | Como Miguel, analista funcional na Everymind, eu quero que todas as alterações de dados sejam realizadas sobre uma conexão criptografada, para proteger a integridade e confidencialidade das informações. | RNF2               | To-do |
| **Segurança do Sistema**  | Como Miguel, analista funcional na Everymind, eu quero que o sistema seja capaz de suportar um aumento de até 100% no volume de deploys sem degradação significativa no desempenho, preparando a plataforma para crescimento futuro e aumento da demanda. | RNF3               | To-do |
| **Performance e Eficiência** | Como Miguel, analista funcional na Everymind, eu quero que o sistema seja capaz de executar um deploy em, no máximo, 10 minutos, para assegurar rapidez e eficiência no processo de atualização e desenvolvimento. | RNF4               | To-do |
