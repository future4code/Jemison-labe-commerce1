import styled from "styled-components";

export const CarrinhoCard = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;


`



export const BotaoLimparCarrinho = styled.button `
        align-self: center;
        color: #ffffff;
        background-color: #000000;
        padding: 10px 20px;
        border: none;
        border-radius: 30px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 16px;

`
export const BotaoRemoverDoCarrinho = styled.button `
        align-self: center;
        color: #ffffff;
        background-color: #8d98b2;
        padding: 10px 20px;
        border: none;
        border-radius: 30px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 16px;

`


export const CarrinhoEstatico = styled.div `
     display: flex;
     flex-direction: column;
     gap: 2rem;
    
    h3{
        font-size: 2rem;

    }

    p{
        font-weight: bold;
        font-size: 1.5rem;
    }

    span {
        color: red;
        font-weight: bold;
    }


`

