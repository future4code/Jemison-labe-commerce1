import React from "react";
import styled from "styled-components";

const Checkout = styled.aside`
    padding: 20px;
    border: 1px solid #c9c9c9;
    width: 208px;
`;

function Carrinho(props) {
    return (
        <Checkout>
            <h2>{props.titulo}</h2>
            <div>
                <p>1x</p>
                <p>Produto 4</p>
                <button>Remover</button>
            </div>

            <p>Valor total: R$10,00</p>
        </Checkout>
    );
}

export default Carrinho;
