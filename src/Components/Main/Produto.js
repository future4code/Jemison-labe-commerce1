import React from "react";
import styled from "styled-components";

const ProdutoItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #ffffff;
`;

const ProdutoImagem = styled.img`
    max-height: 250px;
    border-bottom: 1px solid #c9c9c9;
    border-radius: 10px 10px 0 0;
`;

const ProdutoDescricao = styled.div`
    padding: 16px 24px 24px;
`;

const ProdutoInformacoes = styled.div`
    margin-bottom: 10px;

    & :nth-child(1) {
        font-size: 0.875rem;
        margin-bottom: 6px;
    }

    & :nth-child(2) {
        color: #00acb7;
        font-size: 1.25rem;
        font-weight: 600;
    }
`;

const ProdutoBotao = styled.button`
    align-self: center;
    color: #ffffff;
    background-color: #00acb7;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;
`;

function Produto(props) {
    return (
        <ProdutoItem>
            <ProdutoImagem
                src={props.fotoProduto}
                alt={props.descricaoProduto}
            />

            <ProdutoDescricao>
                <ProdutoInformacoes>
                    <p className="Link">{props.nomeProduto}</p>
                    <p>{props.precoProduto}</p>
                </ProdutoInformacoes>

                <ProdutoBotao>{props.botaoProduto}</ProdutoBotao>
            </ProdutoDescricao>
        </ProdutoItem>
    );
}

export default Produto;
