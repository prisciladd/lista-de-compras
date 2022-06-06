import React, { Component } from 'react';
import Formulario from './Formulario';
import Produto from './Produto';
import styled from "styled-components";

const Container = styled.div`

display: flex;
justify-content: center;
font-size: 3vh;

.container{
  width: 50%;
  background-color:blue;
  font-family: Times New Roman, Georgia, Garamond, serif;
}

.container h1{
  display: flex;
  justify-content: center;
  color: white;
  margin: 20px;  
}

fieldset{
  background-color:white;
  margin: 20px;
  border: 1px solid black;
}

table{
    display: flex;
    flex-direction: column;
    background-color:white;
    margin: 20px;
    margin-top: 50px;
    border: 1px solid black;
  }

  tr{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
  }
  
  th{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total{
    margin: 20px;
    color: white;
    font-size: 20px;
  }
  
`

class App extends Component {
  constructor(props){
    super(props);
    this.adicionar = this.adicionar.bind(this);
    this.remover = this.remover.bind(this);
    this.state = {lista: [], total: "0.00"};
  }
  adicionar(produto){
    this.setState({lista: this.state.lista.concat(produto)}, 
      () => {
        let total = 0;
        for(let p in this.state.lista){
          console.log(p);
          total += this.state.lista[p].preco * this.state.lista[p].quantidade;
        }
        this.setState({total: total.toFixed(2)});
      });
  }
  remover(indice){
    this.state.lista.splice(indice,1);
    this.setState({lista: this.state.lista});

    let total = 0;
    for(let p in this.state.lista){
      console.log(p);
      total -= this.state.lista[p].preco * this.state.lista[p].quantidade;
    }
    this.setState({total: total.toFixed(2)});

    console.log("teste");
  }
  render() {
    return (
      <Container>
      <div className="container">
        <h1>Lista de Compras

        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11.9 43Q10.7 43 9.85 42.15Q9 41.3 9 40.1V15.9Q9 14.7 9.85 13.85Q10.7 13 11.9 13H16.85V12.15Q16.85 9.15 18.925 7.075Q21 5 24 5Q27 5 29.075 7.075Q31.15 9.15 31.15 12.15V13H36.1Q37.3 13 38.15 13.85Q39 14.7 39 15.9V40.1Q39 41.3 38.15 42.15Q37.3 43 36.1 43ZM19.15 12.15V13H28.85V12.15Q28.85 10.1 27.45 8.675Q26.05 7.25 24 7.25Q21.95 7.25 20.55 8.675Q19.15 10.1 19.15 12.15ZM11.9 40.75H36.1Q36.35 40.75 36.55 40.55Q36.75 40.35 36.75 40.1V15.9Q36.75 15.65 36.55 15.45Q36.35 15.25 36.1 15.25H31.15V20.15Q31.15 20.6 30.825 20.925Q30.5 21.25 30 21.25Q29.5 21.25 29.175 20.925Q28.85 20.6 28.85 20.15V15.25H19.15V20.15Q19.15 20.6 18.825 20.925Q18.5 21.25 18 21.25Q17.5 21.25 17.175 20.925Q16.85 20.6 16.85 20.15V15.25H11.9Q11.65 15.25 11.45 15.45Q11.25 15.65 11.25 15.9V40.1Q11.25 40.35 11.45 40.55Q11.65 40.75 11.9 40.75ZM11.25 40.75Q11.25 40.75 11.25 40.575Q11.25 40.4 11.25 40.1V15.9Q11.25 15.6 11.25 15.425Q11.25 15.25 11.25 15.25Q11.25 15.25 11.25 15.425Q11.25 15.6 11.25 15.9V40.1Q11.25 40.4 11.25 40.575Q11.25 40.75 11.25 40.75Z"/></svg>
        </h1>
        <fieldset>
          <h2>Adicionar Produto</h2>
          <Formulario evtAdicionar={this.adicionar}/>
        </fieldset>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.lista.map( (prod,idx) => {
                return <Produto evtDeletar={this.remover} key={idx} indice={idx} produto={prod} />
              })
            }
          </tbody>
        </table>
        <div className="total">Total: {this.state.total}</div>
      </div>
      </Container>
    );
  }
}
export default App;