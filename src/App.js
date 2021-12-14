import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioNota from "./components/FormularioNota";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioNota />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
