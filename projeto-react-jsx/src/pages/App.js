import React, { Component } from 'react';

import './App.css';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Artigo
          nome="Douglas"
          texto="Programação Web com React JS"
        />

        <Artigo
          nome="Burnes"
          texto="Programação Web com PHP"
        />

        <Contador tempo={500} />
        <Contador />

      </div>
    );
  }
}

export default App;
