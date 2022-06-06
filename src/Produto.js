import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`

td{ 
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button{
    margin: 5px;
    display: flex;
    height: 30px;
    align-items: center;
    border-radius: 5px;
    background-color:red;
    color:white;
}
`;

class Produto extends Component {
  constructor(props){
    super(props);
    this.deleta = this.deleta.bind(this);
  }
  deleta(){
    if(this.props.evtDeletar){
      this.props.evtDeletar(this.props.indice);
    }
  }

  render() {
    return (
      <Container>
      <tr>
        <td>{this.props.produto.nome}</td>
        <td>{this.props.produto.preco.toFixed(2)}</td>
        <td>{this.props.produto.quantidade.toFixed(2)}</td>
        <td>{(this.props.produto.preco * this.props.produto.quantidade).toFixed(2)}</td>
        <td><button type="submit" onClick={this.deleta}>Deletar</button></td>
      </tr>
      </Container>
    );
  }
}
export default Produto;