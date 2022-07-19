import React from "react";
import styled from "styled-components";

const Formulario = styled.aside`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #c9c9c9;
    width: 208px;
`;

function Filtros(props) {
    return (
        <Formulario>
            <h2>{props.titulo}</h2>

            <label>Valor mínimo</label>
            <input
                type="number"
                name="valor-minimo"
                id="valor-minimo"
                placeholder="Digite um valor mínimo"
            />

            <label>Valor máximo</label>
            <input
                type="number"
                name="valor-maximo"
                id="valor-maximo"
                placeholder="Digite um valor máximo"
            />

            <label>Busca por nome</label>
            <input
                type="text"
                name="busca-nome"
                id="busca-nome"
                placeholder="Digite o nome do produto"
            />

            <button>Pesquisar produto</button>
        </Formulario>
    );
}

export default Filtros;
