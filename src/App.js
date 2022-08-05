import React, { useState } from "react";


import {Carrinho} from "./components/Carrinho/Carrinho"
import { Filtro } from "./components/Filtros/Filtro";
import { Main } from "./components/Main/Main";
import "./App.css";
import styled from "styled-components";

import listaDeProdutos from "./components/listaDeProdutos"
import { Header } from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer"

export const ConteinerPrincipal = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr ;
  padding: 3rem;
  justify-items: center;

  
`

function App() {

  const [minValor, setMinValor] = useState(-Infinity);
  const [maxValor, setMaxValor] = useState(Infinity);
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisaHeader, setPesquisaHeader] = useState("")
  const [ordemCrescent, setOrdemCrescent] = useState("descrecente")

  const [carrinho, setCarrinho] = useState([])
  //[{item, quantidadeItens }]

  const addItensAoCarrinho = (id) =>{
      const inicioCarrinho = carrinho.findIndex((item) => {
        return item.id === id;
      });
      // Verifica se o carrinho está fazio, se sim add o item!
      if( inicioCarrinho < 0) {
        const novoItem ={
          ...listaDeProdutos.find((item) => item.id === id),
          quantidadeItens: 1,
        }; // se o carrriho estiver vazio,  a condição copia o banco de dados, usa a funcção Find, para buscar no array de objetos, uma unica propriedades comum entre os objetos que é o id, e compara com os id do carrinho.. Assim, adciona mais um elemento

        const carrinhoNovo = [...carrinho, novoItem];
        setCarrinho(carrinhoNovo) /// Variavel que faz uma copia do carrinho, que estará vazio e adiciona o a constante novoItem. E atualiza o carrinho atravez do setCarrinho, passando a variavel novoCarrinho somando mais um
      } else {
        const novoCarrinho = carrinho.map(item =>{
          if (item.id === id){
            return {...item, quantidadeItens: item.quantidadeItens + 1}
          }

          return item;
        }); // Condição  faz o mapeamento do stato inicial do carrinho depois de atualizado pela primeira condição. Passamos como pararmetro o id do item que está no carrinho, se o id for igual, então somamos mais um!

        setCarrinho(novoCarrinho)
      }
  }

  const removeItensDoCarrinho = (id) =>{
    const novoCarrinho = carrinho.map((listaDeProdutos) =>{
      if(listaDeProdutos.id === id) {
        return {...listaDeProdutos, quantidadeItens: listaDeProdutos.quantidadeItens -1 };
      }
      return listaDeProdutos;
    })

    .filter((listaDeProdutos) => listaDeProdutos.quantidadeItens > 0);
    setCarrinho(novoCarrinho)



  }

 



  return (
    <>
      <Header 
          pesquisaHeader = {pesquisaHeader}
          onChangePesquisaHader= {(e) =>  setPesquisaHeader(e.target.value)}
      />

        <ConteinerPrincipal>
            
              <Filtro
                minValor = {minValor}
                onChangeMinValor = {(e) => setMinValor(e.target.value)}

                maxValor = {maxValor}
                onChangeMaxValor = {(e) => setMaxValor(e.target.value)}

                pesquisa = {pesquisa}
                onChangePesquisa = {(e) => setPesquisa(e.target.value)}
              />

              <Main

                listaDeProdutos = {listaDeProdutos}

                minValor = {minValor}
                maxValor = {maxValor}
                pesquisa = {pesquisa}
                pesquisaHeader = {pesquisaHeader}
                
                ordemCrescent = {ordemCrescent}
                onChangeOrdemCrescent = {(e) => setOrdemCrescent(e.target.value)}

                addItensAoCarrinho = {addItensAoCarrinho}

              />


              <Carrinho
                carrinho = {carrinho}
                setCarrinho = {setCarrinho}
                removeItensDoCarrinho = {removeItensDoCarrinho}
              />
        </ConteinerPrincipal>
    <Footer></Footer>
    </>
  )
}

export default App;
