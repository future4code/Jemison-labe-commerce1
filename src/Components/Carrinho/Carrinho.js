import React, { useState } from "react";
import styled from "styled-components";

const Checkout = styled.aside`
    padding: 20px;
    border: 1px solid #c9c9c9;
    width: 208px;
`;

function Carrinho(props) {
    return (
        <Checkout>
            <div>
                <h2>Carrinho</h2>
                <div>
                    <p>1x</p>
                    <p>Produto 4</p>
                    <button>Remover</button>
                </div>
                <p>Valor total:</p>
            </div>
        </Checkout>
    );
}

export default Carrinho;
