import React from "react"
import styled from "styled-components";

const ContainerdoItem = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  margin:10px 10px;
 
    p {
        margin: 0;
    }
    
`
const BotaoRemover = styled.button`
font-size: 16px;
margin: auto;
background-color: 	#ea1744; 
border-radius: 10px;
border: none;
color: white;
padding: 10px ;
text-align: center;
margin-bottom: 4px;
 
cursor: pointer;
   
 
`
// Estilização do botao remover
class ItemCarrinho extends React.Component {
    
    render() {
        return( 
        <ContainerdoItem>
            <p>{this.props.item.quantidade}</p>
            <p>{this.props.item.nome}</p>
            <BotaoRemover 
            onClick={() => this.props.removeProdutoCarrinho(this.props.item.cod)}>Remover</BotaoRemover>
        </ContainerdoItem>
        )}
};

export default ItemCarrinho;