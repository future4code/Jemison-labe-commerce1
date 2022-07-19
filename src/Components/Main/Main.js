import React from "react";
import styled from "styled-components";

import Produto from "../Main/Produto";

const Titulo = styled.h2`
    font-size: 2rem;
`;

const MainInformacoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const SelecionaOrdemProdutos = styled.select`
    color: #757575;
    font-size: 0.875rem;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

const Produtos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    gap: 20px;
`;

function Main(props) {

    const listaProdutos = props.bandoDeDados.map((item,index) =>{
        return (
        <Produto key={index}
            id = {item.id}
            fotoProduto= {item.fotoProduto}
            descricaoProduto = {item.descricaoProduto}
            nomeProduto = {item.nomeProduto}
            precoProduto = {item.precoProduto}
            botaoProduto = {item.botaoProduto}
        > </Produto>
        )


    })


    return (
        <main>
            <Titulo>{props.titulo}</Titulo>

            <MainInformacoes>
                <p>Exibindo 1–6 de 6 resultados</p>

                <SelecionaOrdemProdutos name="ordenacao" id="ordenacao">
                    <option value="crescente" selected>
                        Ordenar por preço: menor para maior
                    </option>
                    <option value="decrescente">
                        Ordenar por preço: maior para menor
                    </option>
                </SelecionaOrdemProdutos>
            </MainInformacoes>

             <Produtos>
                {listaProdutos}
             </Produtos>
               
        </main>
    );
}

export default Main;
