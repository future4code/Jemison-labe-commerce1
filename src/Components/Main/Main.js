import React from "react";
import styled from "styled-components";

import Produto from "../Main/Produto";

import produto1 from "../../img/1.png";
import produto2 from "../../img/2.png";
import produto3 from "../../img/3.png";
import produto4 from "../../img/4.png";
import produto5 from "../../img/5.png";
import produto6 from "../../img/6.png";

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

const Produtos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    gap: 20px;
`;

function Main(props) {
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
                <Produto
                    fotoProduto={produto1}
                    descricaoProduto="Camiseta preta"
                    nomeProduto="Camiseta Astronauta"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
                <Produto
                    fotoProduto={produto2}
                    descricaoProduto="Camiseta amarela"
                    nomeProduto="Camiseta O Dia e A Hora"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
                <Produto
                    fotoProduto={produto3}
                    descricaoProduto="Camiseta azul-marinho"
                    nomeProduto="Camiseta Espaço"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
                <Produto
                    fotoProduto={produto4}
                    descricaoProduto="Camiseta preta"
                    nomeProduto="Camiseta Eu Quero Ir Embora"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
                <Produto
                    fotoProduto={produto5}
                    descricaoProduto="Camiseta azul-estonada"
                    nomeProduto="Camiseta Mae Jemison"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
                <Produto
                    fotoProduto={produto6}
                    descricaoProduto="Camiseta cinza-estonada"
                    nomeProduto="Camiseta Abdução"
                    precoProduto="R$ 89,90"
                    botaoProduto="Adicionar ao carrinho"
                />
            </Produtos>
        </main>
    );
}

export default Main;
