import React, { Component } from 'react';

import {
  Alert, Button,
} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">Olá Mundo</Alert>
        <Alert color="danger">Olá Mundo</Alert>
        <Button color="primary">Clique aqui</Button>

        <Artigo
          nome="Douglas"
          texto="Programação Web com React JS"
        />
        <Artigo
          nome="Burnes"
          texto="Programação Web com PHP"
        />

        <Contador tempo={500} />
        <Contador numero={100} />
      </div>
    )
  }
}

export default HomePage;
