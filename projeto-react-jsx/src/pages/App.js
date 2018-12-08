import React, { Component } from 'react';

import { Container, Nav, NavItem } from 'reactstrap';
import {
  BrowserRouter,
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
      <BrowserRouter>
        <Container>
          <Nav>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tarefas">
                Tarefas
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </NavItem>
          </Nav>

          <Route path="/" exact component={HomePage} />
          <Route path="/tarefas" component={TarefasPage} />
          <Route path="/sobre" component={SobrePage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
