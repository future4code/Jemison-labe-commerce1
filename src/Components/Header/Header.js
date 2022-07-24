import React from "react"
import {HeaderContainer, HeaderMainBg, HeaderMain, HeaderMainBusca, HeaderMainNav } from "./StyledHeader"



import logo from "../../img/logo.svg";
import logo7 from "../../img/icones/carrinho.svg";


export function Header (props) {

    return (
        <HeaderContainer>
                <HeaderMainBg>
                    <HeaderMain>
                        <img src={logo} alt="Labecommerce" />
                        <HeaderMainBusca
                            type="text"
                            placeholder="O que você está procurando?"
                            value={props.pesquisaHeader}
                            onChange = {props.onChangePesquisaHader}
                        />

                        <HeaderMainNav>
                            <a href="#">Minha conta</a>
                            <a href="#">
                                <img src={logo7} alt="Carrinho" />
                            </a>
                        </HeaderMainNav>
                    </HeaderMain>
            </HeaderMainBg>
     </HeaderContainer>
    )
}