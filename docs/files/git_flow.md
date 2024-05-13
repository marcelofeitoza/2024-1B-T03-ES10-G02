# Git Flow (Aplicação Grupo)

## 1. Estrutura de Branches

- *Main Branch*: Continua sendo a linha de vida principal do projeto, representando o código em final de entrega. Atualizações nesta branch devem vir apenas da branch development, e geralmente serão atualizadas ao final da sprint de forma única.

- *Development Branch*: A branch development serve como um ambiente de desenvolvimento para equipe. É útil para testes finais antes de um lançamento, ou antes do fim da sprint. A development é atualizada com recursos das branchs feature/.

- *Hotfix Branches*: As branches hotfix serão criadas a partir de erros que por alguma falha na revisão por pares, acabou no ambiente da "main". Crie branches a partir da main para essas correções utilizando a convenção hotfix/problema_a_ser_consertado. 

- *Feature Branches*: A estratégia para recursos permanece a mesma. Crie branches a partir da development para novos recursos ou correções, usando a convenção /features/nome_do_recurso.

## 2. Fluxo de Trabalho (Workflow)

1. *Desenvolvimento de Recursos*: Inicie um novo recurso criando uma branch /feature/nome_do_recurso a partir da development.

2. *Testes Iniciais*: Desenvolva e teste o recurso em sua branch de recurso. Faça commits pequenos e significativos.

3. *Pull Request para Development*: Quando o recurso está pronto e testado, crie um Pull Request para a development.

4. *Merge para Main*: Após a conclusão dos ajustes na development, faça o merge para a main. Em seguida, marque este ponto com uma tag seguindo o padrão SemVer.

OBS: Em caso de problemas diretamente na main, entra um fluxo independente das etapas descritas acima, que envolve a criação de uma branch Hotfix a partir da main e o procedimento de Pull Request ocorre diretamente para a main com a finalidade de corrigir os problemas identificados.

# Git Flow (Gerenciamento SalesForce)

## 1. Estrutura de Branches

- *Prod Branch*: Essa será uma branch que deverá carregar o código atual que está em PROD. Atualizações nesta branch devem vir apenas da branch release.

- *UAT Branch*: Essa será uma branch que deverá carregar o código atual que está em UAT.

- *Dev Branch*: Essa será uma branch que deverá carregar o código atual que está em DEV. Atualizações nesta branch irão vir a partir das features branchs, de modo que os desenvolvimento possam ser enviados para o ambiente estável de Desenvolvimento.

- *Release Branch*: A branch release é usada para preparar lançamentos. De modo que a subida atual tenha seu código aqui e não impacte os códigos presentes em DEV, UAT e PROD. Sendo assim, caso haja a necessidade de rollback, o código atual em PROD, UAT e DEV pode ser mais uma fonte de tal ação.

- *Feature Branches*: A estratégia para recursos permanece a mesma. Crie branches a partir da staging para novos recursos ou correções, usando a convenção /features/nome_do_recurso.

## 2. Fluxo de Trabalho (Workflow)

1. *Desenvolvimento de Recursos*: Inicie um novo recurso criando uma branch /feature/nome_do_recurso a partir da prod.

3. *Pull Request para Release*: Quando o recurso está pronto e testado, o sistema criará um Pull Request para a release.

4. *Merge para Prod/Uat/Dev*: Após os processos de subida concluídos (para qualquer que seja o ambiente), o sistema irá abrir um PR com o que foi enviado para o ambiente, que está na release para a branch respectiva ao ambiente. Garantindo assim com que o código que está em PROD, UAT e DEV seja o mesmo que está em cada ambiente.

# Versionamento SemVer

O versionamento SemVer (Semantic Versioning) é uma prática recomendada para gerenciar as versões do seu software de maneira clara e previsível. Utilizando o formato MAJOR.MINOR.PATCH, o SemVer ajuda a comunicar a natureza e o impacto das mudanças feitas no projeto. Aqui está um detalhamento mais aprofundado:

- *MAJOR*: Incrementado quando você faz mudanças incompatíveis na API que poderiam quebrar a compatibilidade com versões anteriores. Isso sinaliza que os consumidores do software precisarão fazer modificações significativas para continuar utilizando a nova versão.

- *MINOR*: Incrementado quando você adiciona funcionalidades de maneira compatível com versões anteriores. Isso permite a introdução de novos recursos sem perturbar o funcionamento existente do software.

- *PATCH*: Incrementado quando você faz correções de bugs compatíveis com versões anteriores. Isso se destina a melhorias que não alteram a funcionalidade principal ou a API do software.

Além disso, tags pré-lançamento e metadados de build podem ser utilizados para versões beta, correções e outras modificações prévias ao lançamento final.

# Boas Práticas

- Garanta que main esteja sempre pronta para entrega.
- Utilize Pull Requests para revisão de código e integração de mudanças.
- Mantenha convenções de nomenclatura claras e consistentes para branches e tags.
- Documente mudanças e novos recursos de forma clara.