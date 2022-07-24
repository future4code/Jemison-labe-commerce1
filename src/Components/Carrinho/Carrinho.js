import React from "react"
import {CarrinhoCard, CarrinhoEstatico, BotaoLimparCarrinho, BotaoRemoverDoCarrinho} from "./StyleCarrinho"


export function Carrinho (props) {
    const arryCarrinho = props.carrinho.map((e) => {

        return (
            <CarrinhoCard>
                <p> <span>{e.quantidadeItens}</span> produto(s) de <span>{e.nomeProduto}</span></p>
                <p>  Total dos Produtos: <span> {e.quantidadeItens * e.precoProduto} , 00 </span> </p>

                <BotaoRemoverDoCarrinho onClick={() => props.removeItensDoCarrinho(e.id)}> remover do carrinho</BotaoRemoverDoCarrinho>

            </CarrinhoCard>)
            })

        
        const somaCarrinho = [0]
        somaCarrinho.forEach(somaItens)

        function somaItens (item, index, array){
            
            for (let i of props.carrinho) {
                array[index] +=  i.quantidadeItens * i.precoProduto
            }
        }

       function limparCarrinho () {
            return props.setCarrinho([])
       }




    return (
        <CarrinhoEstatico>
            <h3> Carrinho:</h3>
            {arryCarrinho}
            <p> Valor total da Compra: R$ <span>{somaCarrinho}, 00</span></p>

            <BotaoLimparCarrinho onClick={limparCarrinho}> Limpar Carrinho</BotaoLimparCarrinho>

        </CarrinhoEstatico>
    )


}