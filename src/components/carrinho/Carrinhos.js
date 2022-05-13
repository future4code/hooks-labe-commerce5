import React from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItemCarrinho";
import { FaShoppingCart } from "react-icons/fa";





const ContainerdoCarrinho = styled.div`
  
  display: inline;
  margin-top: 2%;
  margin-right: 15%;
  width: 100%;
  height: 80%;
  border-radius:20px;
  box-shadow: 2px 2px 100px grey;
  background:#228b22;
  
`

const ContainerLista = styled.div`
gap: 20%;
margin-right:50%;
margin-left: 50%;
`
const EstiloCarrinho = styled.h3`
display: grid;
margin-left:40%;
`
const EstiloValorTotal = styled.h4`
display:grid;
margin-left:60%;
`



class Carrinho extends React.Component {
  calculaValorTotal = () => {
    let valorTotal = 0;
    for(let produto of this.props.produtosNoCarrinho){
        valorTotal += produto.valor * produto.quantidade
    }
    return valorTotal
}
  render(){
    return <ContainerdoCarrinho>
           <EstiloCarrinho> <FaShoppingCart /></EstiloCarrinho>
      <ContainerLista>
        {this.props.produtosNoCarrinho.map((produto) => {
          return <ItemCarrinho 
            item={produto}
            removeProdutoCarrinho={this.props.removeProdutoCarrinho}
          />
        })}
        
      </ContainerLista>
      <EstiloValorTotal>Valor total: R${this.calculaValorTotal()},00</EstiloValorTotal>
    </ContainerdoCarrinho>
  }
}




export default Carrinho