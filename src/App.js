import React from "react";
import Header from "./components/header/Header"
import Produtos from "./components/produtos/Produtos";
import Carrinho from "./components/carrinho/Carrinhos";
import Filtro from "./components/filtro/Filtro";
import styled from "styled-components";
import produto1 from "./img/produto1.png";
import produto2 from "./img/produto2.png";
import produto3 from "./img/produto3.png";
import produto4 from "./img/produto4.png";
import produto5 from "./img/produto5.png";
import produto6 from "./img/produto6.png";
import Footer from "./components/footer/Footer"
import cartoes from "./img/cartoes.png"




const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
  display: grid;
  grid-template-rows:1fr;
  width: 100%;
  gap: 8px;
  background-color:#ffff;
  
  
`;



const produtos = [
  {
    cod: 1,
    nome: "Foguete espacial",
    valor: 165,
    img: produto1,
  },
  {
    cod: 2,
    nome: "kit de naves espaciais e satélite",
    valor: 89,
    img: produto2,
  },
  {
    cod: 3,
    nome: "kit espacial astronautas",
    valor: 95,
    img: produto3,
  },
  {
    cod: 4,
    nome: "Boneco Buzz Lightyear",
    valor: 189,
    img: produto4,
  },
  {
    cod: 5,
    nome: "Nave snape-ships-sabre",
    valor: 74,
    img: produto5,
  },
  {
    cod: 6,
    nome: "Nave espacial",
    valor: 59,
    img: produto6,
  },
  
];
class App extends React.Component {
  state = {
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
    produtosNoCarrinho: [],
  };

  onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value });
  };

  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value });
  };

  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

  adicionaProdutoNoCarrinho = (codProduto) => {
    const addNoCarrinho = this.state.produtosNoCarrinho.find(
      (produto) => codProduto === produto.cod
    );

    if (addNoCarrinho) {
      const novoProdutoAdd = this.state.produtosNoCarrinho.map((produto) => {
        if (codProduto === produto.cod) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }
        return produto;
      });
      this.setState({ produtosNoCarrinho: novoProdutoAdd });
    } else {
      const produtoNovo = produtos.find(
        (produto) => codProduto === produto.cod
      );

      const novoProdutoAdd = [
        ...this.state.produtosNoCarrinho,
        { ...produtoNovo, quantidade: 1 },
      ];

      this.setState({ produtosNoCarrinho: novoProdutoAdd });
    }
  };

  removeProdutoCarrinho = (codProduto) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.cod === codProduto) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho });
  };
  render() {
    return (
       <AppContainer>
         
          <Header/>
          <Filtro
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}
          /> 

         <Carrinho
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          removeProdutoCarrinho={this.removeProdutoCarrinho}
         />

         <Produtos
          produtos={produtos}
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          adicionaProdutoNoCarrinho={this.adicionaProdutoNoCarrinho}
         />
        
        <Footer/>
      </AppContainer>

      
      
    );
  }
}

export default App;