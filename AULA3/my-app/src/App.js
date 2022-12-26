import './App.css';
import React, { Component, Fragment as Fr } from 'react';
import Table from './components/Table';
import Lista from './components/Lista';

// Component React com classe
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      input: "Leonardo",
      nomeCliente: "Ana Lima"
    };

    // façam com arraw function
    // this.addNome.bind(this);
  }

  addNome() {
    const nomes = this.state.nomes;
    nomes.push('Leonardo');
    this.setState({ 
      nomes
    });
    // nomes: [...this.state.nomes, 'João'], 
  }

  inputChange(event) {
    this.setState({
      nomeCliente: event.target.value
    });
  }

  render() {
    return (
      <Fr>
        <h1>Olá Leonardo</h1>
        <p>Bem-vindo ao site!</p>
        <Table nomeCliente={this.state.nomeCliente} />
        <br />
        <br />
        <button onClick={() => this.addNome()}>Adicione um nome</button>
        <Lista items={this.state.nomes} />

        <input type="text" onChange={this.inputChange.bind(this)} value={this.state.nomeCliente} />

        <p>{this.state.input}</p>

      </Fr>
    );
  }
}

export default App;