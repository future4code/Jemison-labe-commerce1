import styled from "styled-components";


export const MainPrincipal = styled.div `
  padding: 10px;

`


export const ConteinerPrincipal = styled.header `
    display: flex;
    gap: 28rem;
    border: 1px black;
    justify-content: center;
    align-items: center;

    p{
      margin-top:1rem;
      font-weight: bolder;
      font-size: 1.1rem;
    }

    span {
      color: #003e9a;
    }

    select{
      width: 8vw;
      height:2vw;
    }
    

`

export const GridProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  text-align: center;
  margin-top: 30px;
  
`
export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vh;
  font-weight: bold;
  height: 50vh;
  justify-content: space-between;
  margin: 8px;
  border-radius: 10px;
  background-color: #ffffff;
  img {
    max-height: 250px;
    border-bottom: 1px solid #c9c9c9;
    border-radius: 10px 10px 0 0;
  }
`
export const BotaoCard = styled.button`
    align-self: center;
    color: #ffffff;
    background-color: #00acb7;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 16px;
    
`
export const NomeProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 1%; 
`
export const PrecoProduto = styled.div`
 
  color: #00acb7;
  font-weight: bold;
  padding: 1%;
  font-size: 1.1rem;
`

