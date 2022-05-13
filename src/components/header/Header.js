import React from "react"
import Logo from "../../img/space-toys_logo.png";
import styled from "styled-components";

const DivHeader = styled.div`
display:flex;
position: flex;
height: 120px;
background:blue;
`

const LogoImg = styled.img `
height: 140px;
margin-top: 30px;
margin-left: 10px;
`



class Header extends React.Component {
   
    render(){
        return (
            <DivHeader>
                 <LogoImg src={Logo}
                alt="Logo"
               />
             
               </DivHeader>
      )  
    }
}
export default Header;
