import React, { useState } from "react";
import styled from "styled-components";
import Filtros from "../Filtros/Filtros";
import Carrinho from "../Carrinho/Carrinho";
import { Conteudo } from "../../App";
import { bancoDeDadosList } from "../../data/bancoDeDados";

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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`;

function Main(props) {
    //Filtros

    const [minValor, setMinValor] = useState(-Infinity);
    const [maxValor, setMaxValor] = useState(Infinity);
    const [pesquisa, setPesquisa] = useState("");
    const [ordemCrescent, setOrdemCrescent] = useState("descrecente");

    //Função Add Item

    //Ponto de otimização
    const lowerPesquisa = pesquisa.toLowerCase();

    return (
        <Conteudo>
            <Filtros
                pesquisa={pesquisa}
                minValor={minValor}
                maxValor={maxValor}
                setPesquisa={setPesquisa}
                setMinValor={setMinValor}
                setMaxValor={setMaxValor}
            />
            <main>
                <Titulo>{props.titulo}</Titulo>

                <MainInformacoes>
                    <p>Exibindo resultados</p>

                    <SelecionaOrdemProdutos
                        value={ordemCrescent}
                        onChange={(e) => setOrdemCrescent(e.target.value)}>
                        <option value={"descrecente"} selected>
                            Ordenar por preço: menor para maior
                        </option>
                        <option value={"crescente"}>
                            Ordenar por preço: maior para menor
                        </option>
                    </SelecionaOrdemProdutos>
                </MainInformacoes>

                <Produtos>
                    {bancoDeDadosList
                        .filter((bandoDeDadosInicial) => {
                            //lowerPesquisa - utilizado para otimizar o código
                            return (
                                bandoDeDadosInicial.nomeProduto
                                    .toLowerCase()
                                    .includes(lowerPesquisa) ||
                                bandoDeDadosInicial.descricaoProduto
                                    .toLowerCase()
                                    .includes(lowerPesquisa)
                            );
                        })
                        .filter((bandoDeDadosInicial) => {
                            return (
                                bandoDeDadosInicial.precoProduto >= minValor ||
                                minValor === ""
                            );
                        })
                        .filter((bandoDeDadosInicial) => {
                            return (
                                bandoDeDadosInicial.precoProduto <= maxValor ||
                                maxValor === ""
                            );
                        })

                        //Ordena  os produtos, por fileira, do maior pra o menor ou menor para mairo
                        .sort((maior, menor) => {
                            if (ordemCrescent === "descrecente") {
                                return maior.precoProduto - menor.precoProduto;
                            } else {
                                return menor.precoProduto - maior.precoProduto;
                            }
                        })

                        .map((bandoDeDadosInicial) => {
                            return (
                                <Produto
                                    key={bandoDeDadosInicial}
                                    id={bandoDeDadosInicial.id}
                                    fotoProduto={
                                        bandoDeDadosInicial.fotoProduto
                                    }
                                    descricaoProduto={
                                        bandoDeDadosInicial.descricaoProduto
                                    }
                                    nomeProduto={
                                        bandoDeDadosInicial.nomeProduto
                                    }
                                    precoProduto={bandoDeDadosInicial.precoProduto
                                        .toString()
                                        .replace(".", ",")}></Produto>
                            );
                        })}
                </Produtos>
            </main>
            <Carrinho />
        </Conteudo>
    );
}

export default Main;
