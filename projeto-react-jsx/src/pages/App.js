import React, { Component } from 'react';

import { Container } from 'reactstrap';
import {
  HashRouter,
  Link,
  Route
} from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>

          <Route path="/" exact component={HomePage} />
          <Route path="/tarefas" component={TarefasPage} />
          <Route path="/sobre" component={SobrePage} />
        </Container>
      </HashRouter>
    );
  }
}

export default App;
