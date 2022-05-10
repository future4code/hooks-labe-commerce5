import React from "react";
import styled from "styled-components"
import Logo from "../../img/space-toys_logo.png";


const DivFiltro = styled.div`
display: flex;
align-items: center;
justify-content: right;
margin-top:-50px;
width: 100%;
height: 50px;
position: relative;
`



const DivInput = styled.label`
  display: flex;
  
`
const EstiloInputs = styled.input`
width: 80%;
margin: 0 auto;
	padding: 10px;
	border: none ;
  margin-top: 40px;
	margin-bottom: 10px;
	border-radius: 10px;
`
// Estilizei os Inputs 
class Filtro extends React.Component {
  render() {
    return (

      <DivFiltro>    
       
        <div>
          <DivInput>
            <EstiloInputs className="inputValores" 
            type="number"
            placeholder="Valor mínimo"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <EstiloInputs className="inputValores" 
            type="number"
            placeholder="Valor máximo"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <EstiloInputs className="inputBusca" 
            type="text"
            placeholder="Buscar"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
            />
          </DivInput>
        </div>
      </DivFiltro>
    );
  }
}

export default Filtro;