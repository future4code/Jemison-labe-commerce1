import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import {bancoDeDadosList} from "./data/bancoDeDados"

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";



export const Conteudo = styled.main`
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
                <Main 
                    titulo="Camisetas Espaciais"
                />
            </Conteudo>

            <Footer />
        </div>
    );
}

export default App;
