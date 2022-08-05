import React from "react";

import {MainPrincipal} from "./StyleMain"




import {ConteinerPrincipal, Produto, BotaoCard , NomeProduto,  PrecoProduto, GridProdutos } from './StyleMain'




export function Main (props) {

    const obterListaFiltrada = () => {
         return props.listaDeProdutos

         .filter((listaDeProdutos) => props.minValor <= listaDeProdutos.precoProduto || props.minValor === "")

         .filter((listaDeProdutos) => props.maxValor >= listaDeProdutos.precoProduto || props.maxValor === "")

         .filter((listaDeProdutos) => listaDeProdutos.nomeProduto.toLowerCase().includes(props.pesquisa.toLowerCase()))

         .filter ((listaDeProdutos) => listaDeProdutos.nomeProduto.toLowerCase().includes(props.pesquisaHeader.toLowerCase()))
        
         .sort((maior, menor) => {
            if(props.ordemCrescent === "descrecente"){
                return (maior.precoProduto - menor.precoProduto)
            } else {
                return (menor.precoProduto - maior.precoProduto)
            }
         })
      };



     const listaFiltrada = obterListaFiltrada().map((listaDeProdutos) => {
        return (
            <Produto>
                <img src={listaDeProdutos.fotoProduto}></img>
                <NomeProduto> {listaDeProdutos.nomeProduto}</NomeProduto>
                <PrecoProduto>{listaDeProdutos.precoProduto}</PrecoProduto>
                <BotaoCard  onClick={() => props.addItensAoCarrinho(listaDeProdutos.id)}> 
                    Adcionar ao Carrinho
                
                </BotaoCard>
                
            </Produto>
        )

     }) 


    return (
        <MainPrincipal>
            <h1> Camisetas Espacias</h1>
            <ConteinerPrincipal>
                <p>Quantidade de produtos: <span>{listaFiltrada.length} </span></p>

                <select 
                    value={props.ordemCrescent}
                    onChange = {props.onChangeOrdemCrescent}
                >

                    <option value={"crescente"}> Crescente</option>
                    <option value={"descrecente"}> Descrescente</option>

                </select>

            </ConteinerPrincipal>

            <GridProdutos>
                {listaFiltrada}
            </GridProdutos>




        </MainPrincipal>
        
    )

}