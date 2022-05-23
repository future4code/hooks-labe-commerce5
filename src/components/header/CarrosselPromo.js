import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const CarrosselEdit = styled.div`
display: block;
justify-content: center;
align-items: center;
background-color: #a0f1ea;
height: 40px;
`


const CarrosselMenu = ()=>{
    return(
     
     <Carousel infiniteLoop useKeyboardArrows autoPlay>    
      <CarrosselEdit>
        <h3>Frete Grátis para todo Brasil em compras Acima de R$150.</h3>
      </CarrosselEdit>

      <CarrosselEdit>
        <h3>10% de desconto para pagamento à vista</h3>
      </CarrosselEdit>
     </Carousel>   
    )
}
export default CarrosselMenu