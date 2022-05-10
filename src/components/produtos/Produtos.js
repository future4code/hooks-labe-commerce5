import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContainerDeProdutos = styled.div`
  
`;
const CaixaDeOrdenacao = styled.label`
font-size:16px;
font-weight:bold;

`
// Estilização a Ordenação
const Cabecalho = styled.div`
  display: inline-block;
  align-items: center;
  text-align: center;
  margin:20px 100px;
  border-radius:20px;
  box-shadow: 2px 2px 100px grey;
  background: cornsilk;
  padding: 2%;
  


  p {
   
  }
  select {
   
  }
`;



const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  margin: 10px;
`
const EstoqueProduto = styled.p`
  align-items: center;
  padding: 0px 50px;
 
  `
;



class Produtos extends React.Component {
  state = {
    ordenacao: "Crescente"
  }

  pegaListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => produto.valor <= (this.props.filtroMax || Infinity))
      .filter((produto) => produto.valor >= this.props.filtroMin)
      .filter((produto) => produto.nome.includes(this.props.filtroNome))
      .sort((a, b) => this.state.ordenacao === "Crescente" ? a.valor - b.valor : b.valor - a.valor)
  }

  alteraOrdenacao = (event) => {
    this.setState({ordenacao: event.target.value})
  }

  render() {
    const listaFiltrada = this.pegaListaFiltrada()
    return (
      <ContainerDeProdutos>
        <Cabecalho>
          <EstoqueProduto>Estoque de produtos: {listaFiltrada.length}</EstoqueProduto>
          <CaixaDeOrdenacao>
            Ordenar: 
            <select value={this.state.ordenacao} onChange={this.alteraOrdenacao}>
              <option value={"Crescente"}>Crescente</option>
              <option value={"Decrescente"}>Decrescente</option>
            </select>
          </CaixaDeOrdenacao>
        </Cabecalho>
        <GridProdutos>
          {listaFiltrada.map((produto) => {
            return <Card
              produto={produto} 
              adicionaProdutoNoCarrinho={this.props.adicionaProdutoNoCarrinho}
            /> 
          })}
        </GridProdutos>
      </ContainerDeProdutos>
    );
  }
}

export default Produtos;