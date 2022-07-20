import React, { useState } from "react";
import styled from "styled-components";
import Filtros from "../Filtros/Filtros";
import Carrinho from "../Carrinho/Carrinho";
import { Conteudo } from "../../App";
import {bancoDeDadosList} from "../../data/bancoDeDados"

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
  //Filtros
  const [minValor, setMinValor] = useState("");
  const [maxValor, setMaxValor] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  // const HandleMinValor = (e) => {
  //     setMinValor(e.target.value)
  // }

  // const HandleMaxValor = (e) => {
  //     setMaxValor(e.target.value)
  // }

  // const HandlePesquisa = (e) => {
  //     setPesquisa(e.target.value)
  // }

  return (
    <Conteudo>
      <Filtros />
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
            {bancoDeDadosList.map((bandoDeDadosInicial, index) => {
                return (
                    <Produto
                    key={index}
                    id={bandoDeDadosInicial.id}
                    fotoProduto={bandoDeDadosInicial.fotoProduto}
                    descricaoProduto={bandoDeDadosInicial.descricaoProduto}
                    nomeProduto={bandoDeDadosInicial.nomeProduto}
                    precoProduto={bandoDeDadosInicial.precoProduto}
                    botaoProduto={bandoDeDadosInicial.botaoProduto}
                >
                    {" "}
                </Produto>
                )
            })

            }
        </Produtos>
      </main>
      <Carrinho />
    </Conteudo>
  );
}

export default Main;
