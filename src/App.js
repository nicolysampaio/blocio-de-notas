import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas/index";
import FormularioNota from "./components/FormularioNota/index";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioNota criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
