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
  
  const [minValor, setMinValor] = useState(-Infinity);
  const [maxValor, setMaxValor] = useState(Infinity);
  const [pesquisa, setPesquisa] = useState("");
  const [ordemCrescent, setOrdemCrescent] = useState("descrecente")

  //Logica do Carrinho
  
  



  //Ponto de otimização
  const lowerPesquisa = pesquisa.toLowerCase();

  const HandleMinValor = (e) => {
      setMinValor(e.target.value)
  }

  const HandleMaxValor = (e) => {
      setMaxValor(e.target.value)
  }

  const HandlePesquisa = (e) => {
      setPesquisa(e.target.value)
  }

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
          <p>Exibindo 1–6 de 6 resultados</p>

          <SelecionaOrdemProdutos
            value={ordemCrescent}
            onChange={(e)=>setOrdemCrescent(e.target.value)}
          
          >
            <option value= {"descrecente"} selected>
              Ordenar por preço: menor para maior
            </option>
            <option value={"crescente"}>
              Ordenar por preço: maior para menor
            </option>
          </SelecionaOrdemProdutos>
        </MainInformacoes>

        <Produtos>
            {bancoDeDadosList
                  .filter((bandoDeDadosInicial) => { //lowerPesquisa - utilizado para otimizar o código
                      return bandoDeDadosInicial.nomeProduto.toLowerCase().includes(lowerPesquisa) || bandoDeDadosInicial.descricaoProduto.toLowerCase().includes(lowerPesquisa)
                  })
                  .filter((bandoDeDadosInicial) => {
                      return bandoDeDadosInicial.precoProduto >= minValor  || minValor === ""
                  })
                  .filter((bandoDeDadosInicial) => {
                      return bandoDeDadosInicial.precoProduto <= maxValor  || maxValor === ""
                  }) 

                  .sort((maior, menor) => {
                    if (ordemCrescent === "descrecente"){
                      return (maior.precoProduto - menor.precoProduto)
                    } else {}
                      
                    
                  })


                    .map((bandoDeDadosInicial) => {
                        return (
                            <Produto
                            key={bandoDeDadosInicial}
                            id={bandoDeDadosInicial.id}
                            fotoProduto={bandoDeDadosInicial.fotoProduto}
                            descricaoProduto={bandoDeDadosInicial.descricaoProduto}
                            nomeProduto={bandoDeDadosInicial.nomeProduto}
                            precoProduto={`R$ ${bandoDeDadosInicial.precoProduto}`}
                            
                            
                        >
                         
                </Produto>
                )
            })

            }
        </Produtos>
      </main>
      <Carrinho 
        

      
      
      />
    </Conteudo>
  );
}

export default Main;
