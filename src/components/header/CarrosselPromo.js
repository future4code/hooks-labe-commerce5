import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const CarrosselEdit = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #53af26;
height: 40px;
`


const CarrosselMenu = ()=>{
    return(
     
     <Carousel infiniteLoop useKeyboardArrows autoPlay>    
      <CarrosselEdit>
        <h3>Frete Grátis para todo Brasil em Produtos Space Toys Acima de R$150.</h3>
      </CarrosselEdit>

      <CarrosselEdit>
        <h3>5% de desconto ao retirar em Loja</h3>
      </CarrosselEdit>
     </Carousel>   
    )
}
export default CarrosselMenu