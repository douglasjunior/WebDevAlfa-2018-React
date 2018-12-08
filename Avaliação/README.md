# Avaliação WebDev-Alfa 2018 React JS

Avaliação da disciplina de **Desenvolvimento Web com React JS**.

# Requisitos

Utilizando a biblioteca React JS, desenvolva uma aplicação frontend que seja capaz de gerenciar uma Agenda de Tarefas com autenticação de usuários.

A aplicação deve possuir as páginas de Cadastro público de usuários e Login com e-mail e senha. Além disso, cada usuário logado deve ser capaz de Cadastrar, Editar, Listar e Excluir suas tarefas, bem como marcá-las como Concluída.

No backend (servidor) vocês podem utilizar a [API criada durante a avaliação da disciplina de Node JS](https://github.com/douglasjunior/WebDevAlfa-2018-Node/tree/master/Avaliação).

As rotas consumidas pela aplicação devem seguir a seguinte estrutura:

|Método|URL|Descrição|
|-|-|-|
POST|http://localhost:3001/api/usuarios|Cadastro de usuários|
POST|http://localhost:3001/api/usuarios/login|Login de usuários|
GET|http://localhost:3001/api/usuarios/1|Consulta de usuário por ID|
PUT|http://localhost:3001/api/usuarios/1|Edição de usuários|
POST|http://localhost:3001/api/tarefas|Cadastro de tarefas|
GET|http://localhost:3001/api/tarefas|Listagem de tarefas|
GET|http://localhost:3001/api/tarefas/1|Consulta de tarefa por ID|
PUT|http://localhost:3001/api/tarefas/1|Edição de tarefas|
DEL|http://localhost:3001/api/tarefas/1|Exclusão de tarefas|
PUT|http://localhost:3001/api/tarefas/1/concluida|Marcar tarefa como Concluída|
DEL|http://localhost:3001/api/tarefas/1/concluida|Desmarcar tarefa como Concluída|

Para iniciar, você pode:
- criar um novo projeto utilizando `create-react-app`; ou
- configurar manualmente o `webpack`  para gerenciar o seu projeto.

# Entrega

O projeto final deverá ser entregue via GitHub, sendo que o aluno deverá me enviar por e-mail o Link do projeto até **18 de janeiro de 2019** às **23h59m**.

Descreva no e-mail quaisquer instruções necessárias para executar e testar o projeto. (caso sua API tenha rotas diferentes das especificadas acima, então também enviar o projeto da API)

_Não esqueça de assinar o e-mail com o seu nome completo._
