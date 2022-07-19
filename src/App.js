import React from "react";
import styled from "styled-components";
import "./App.css";

import Filtros from "./Components/Filtros/Filtros";
import Main from "./Components/Main/Main";
import Carrinho from "./Components/Carrinho/Carrinho";

const Container = styled.div`
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
        <Container>
            <Filtros titulo="Filtros" />

            <Main titulo="Camisetas Espaciais"/>

            <Carrinho titulo="Carrinho" />
        </Container>
    );
}

export default App;
