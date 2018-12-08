import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

const TAREFAS = [
  {
    id: 1,
    titulo: 'Aprender React',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    titulo: 'Aprender JavaScript',
    descricao: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 3,
    titulo: 'Aprender React-Router',
    descricao: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
];

class TarefasPage extends Component {
  render() {
    const tarefasLinks = TAREFAS.map((tarefa, index) => {
      return (
        <li key={tarefa.id}>
          <Link to={`/tarefas/${tarefa.id}`}>
            {tarefa.titulo}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <h1>Tarefas</h1>
        <ul>
          {tarefasLinks}
        </ul>
        <Route
          path="/tarefas/:tarefaId"
          render={props => {
            const tarefaId = Number(props.match.params.tarefaId);
            const tarefa = TAREFAS.find(tar => tar.id === tarefaId);
            return (
              <div>
                {tarefa.descricao}
              </div>
            )
          }}
        />
      </div>
    )
  }
}

export default TarefasPage;
