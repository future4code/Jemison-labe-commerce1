import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./Components/Header/Header";
import Filtros from "./Components/Filtros/Filtros";
import Main from "./Components/Main/Main";
import Carrinho from "./Components/Carrinho/Carrinho";
import Footer from "./Components/Footer/Footer";

const Conteudo = styled.main`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
`;

function App() {
    return (
        <div>
            <Header />

            <Conteudo>
                <Filtros titulo="Filtrar por" />
                <Main titulo="Camisetas Espaciais" />
                <Carrinho titulo="Carrinho" />
            </Conteudo>

            <Footer />
        </div>
    );
}

export default App;
