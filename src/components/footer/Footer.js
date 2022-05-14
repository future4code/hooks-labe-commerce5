import React from "react";
import styled from "styled-components"

const EstiloFooter = styled.div`
background-color:#A0C3FA;
`
const ImagemCartoes = styled.img`
width:400px;
padding-bottom:20px;
`
const ImagemRedes = styled.img`
width:50px!important;
height:50px!important;
`
const ImagemSiteSeguro = styled.img`
width:25%;
margin-left:70%;
`
const EstiloDisplayFlex = styled.div`
display:flex;
align-items:center;
flex-direction:row;
text-align:center;
justify-content:space-evenly;
color: gray;
`
const DisplayFlexElemento = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const EstiloTexto = styled.p`
color:black;
text-align:center;
padding-left:20vh;
padding-right:20vh;
`



class Footer extends React.Component{
    render(){

        return(
        <EstiloFooter>
            <EstiloTexto>"A TOYS EXPRESS chegou para inovar e revolucionar o mercado de brinquedos. Somos uma loja virtual voltada a brinquedos com tema espacial.
                Aqui você encontra diversos itens, além dos melhores
                lançamentos e  diversas promoções. 
                É muito fácil e prático. Você só precisa entrar no nosso site, e escolher o produto que deseja e pode deixar que nós, da TOYS EXPRESS, cuidamos dos demais serviços até a entrega do presente, embalado no endereço escolhido.
                Assim, você pode desfrutar melhor seu tempo e se dedicar àquilo que você gosta ou com quem você ama! "
            </EstiloTexto>

            <EstiloDisplayFlex>
            <DisplayFlexElemento>
            <ImagemCartoes src="https://th.bing.com/th/id/R.f5bddbdb77607d9dab9b6a4624db2267?rik=FfJuq3LJduK8Ag&riu=http%3a%2f%2fessencialtoldos.com.br%2fwp-content%2fuploads%2f2016%2f11%2fcartoes-de-credito.png&ehk=RZ9sZo2BGAQjyrJ9d%2fGrQ26ZrguTRy1K3UZMNU%2boKpI%3d&risl=&pid=ImgRaw&r=0"/>
            
            <div>Siga-nos</div>

            <div>               
            <a href="https://www.facebook.com/"> <ImagemRedes src="https://th.bing.com/th/id/R.c4b3b4ba5cc5d164bef2fb66c33ac210?rik=DvWyW7%2f1Wp4tLA&pid=ImgRaw&r=0"/></a>
            <a href="https://twitter.com/"> <ImagemRedes src="https://th.bing.com/th/id/R.18175cf35fd81ce71a4fcd35fc2650ae?rik=b4%2brm2mt9ubioQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fTwitter-PNG-File-180x180.png&ehk=Ehha2JpD8yHxILj3kp7Qp7xRV04YLMcE1nLyzrWildI%3d&risl=&pid=ImgRaw&r=0"/></a>
            <a href="https://www.instagram.com/"> <ImagemRedes src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"/></a>
            <a href="https://www.whatsapp.com/?lang=pt_br"> <ImagemRedes src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc1YvGvLNvkelBaWFA97Fxn2wh92ZjkoiO3DaJC2zmmx1TxfTiyloTVQYm6dwMqGixPk&usqp=CAU"/></a>
            </div>
            </DisplayFlexElemento>
            <DisplayFlexElemento>
            <p>Quem Somos</p>
            <p>Institucional</p>
            <p>Trabalhe conosco</p>
            <p>Política de Privacidade</p>
            </DisplayFlexElemento>
            </EstiloDisplayFlex>
            
            <div>
             <ImagemSiteSeguro src="https://lh3.googleusercontent.com/proxy/UAd7Szw0aj3PVWQvCfldJZJUoS7_DdoodMwUVoU1ErzXUHBEPt6sTltKmy5DvcqYeKng8Kp7qjZarsGEZhp5AnqDWTDdSVJRQY5Gj_2Fhw=s0-d"/>
            </div>
            <EstiloTexto>Todos os direitos reservados a LabeCommerce Inc.</EstiloTexto>
        </EstiloFooter>
    

        )  
}}
export default Footer;