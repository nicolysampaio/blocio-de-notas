import React, { Component } from "react";
import "./style.css";

class FormularioNota extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto); 
  }

  render() {
    return (
      <form className="form-nota" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-nota_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-nota_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className="form-nota_input form-nota_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioNota;
