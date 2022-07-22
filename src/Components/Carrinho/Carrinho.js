import React, { useState } from "react";
import styled from "styled-components";
import {bancoDeDadosList} from "../../data/bancoDeDados"

const Checkout = styled.aside`
    padding: 20px;
    border: 1px solid #c9c9c9;
    width: 208px;
`;

function Carrinho(props) {
    const [carrinho] = useState(props)


    const listaCarrinho = props.carrinho.map((e) => {
        return (
            <div>
                <p> {e.qtd}</p>

            </div>
        )
    })


    
    return (
        <Checkout>
            <div>
                {listaCarrinho}

            </div>
        </Checkout>
    );
}

export default Carrinho;
