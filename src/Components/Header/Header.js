import React from "react";
import styled from "styled-components";
import HeaderListaItem from "./HeaderListaItem";

import logo from "../../img/logo.svg";
import logo1 from "../../img/icones/instagram.svg";
import logo2 from "../../img/icones/twitter.svg";
import logo3 from "../../img/icones/facebook.svg";
import logo4 from "../../img/icones/youtube.svg";
import logo5 from "../../img/icones/pesquisar.svg";
import logo6 from "../../img/icones/seta.svg";
import logo7 from "../../img/icones/carrinho.svg";

const HeaderContainer = styled.header`
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const HeaderTopBg = styled.div`
    background-color: #00a3ad;
    padding: 10px;
    font-size: 0.875rem;
    line-height: 1;
`;

const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1130px;
    margin: 0 auto;
`;

const HeaderSocial = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const HeaderTopNav = styled.nav`
    display: flex;
    gap: 33px;
`;

const HeaderTopNavItem = styled.div`
    position: relative;

    li{
        color: black;
    }

    &::before {
        display: inline-block;
        content: "";
        height: 100%;
        width: 1px;
        background-color: #ffffff;
        left: -17px;
        position: absolute;
    }
`;

const HeaderMainBg = styled.div`
    background-color: #00acb7;
    padding: 25px;
    font-size: 1rem;
    line-height: 1;
`;

const HeaderMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 28px;
    align-items: center;
    max-width: 1130px;
    margin: 0 auto;
`;

const HeaderMainBusca = styled.input`
    padding: 10px 25px;
    border: 1px solid #00acb7;
    outline: none;
    border-radius: 15px;
    font-size: 0.875rem;
    line-height: 1;
`;

const HeaderMainNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderTopBg>
                <HeaderTop>
                    <p>
                        Precisa de ajuda? Escreva para:
                        ajuda@labecommerce.com.br
                    </p>
                    <HeaderTopNav>
                        <HeaderSocial>
                            <HeaderListaItem
                                link="https://www.instagram.com/"
                                logo1={logo1}
                                descricao="Instagram"
                            />
                            <HeaderListaItem
                                link="https://www.twitter.com/"
                                logo1={logo2}
                                descricao="Twitter"
                            />
                            <HeaderListaItem
                                link="https://www.facebook.com/"
                                logo1={logo3}
                                descricao="Facebook"
                            />
                            <HeaderListaItem
                                link="https://www.youtube.com/"
                                logo1={logo4}
                                descricao="Youtube"
                            />
                        </HeaderSocial>
                        <HeaderTopNavItem href="#">
                            Lista de desejos
                        </HeaderTopNavItem>
                        <HeaderTopNavItem href="#">Ajuda</HeaderTopNavItem>
                    </HeaderTopNav>
                </HeaderTop>
            </HeaderTopBg>

            <HeaderMainBg>
                <HeaderMain>
                    <img src={logo} alt="Labecommerce" />
                    <HeaderMainBusca
                        type="text"
                        name="pesquisa"
                        id="pesquisa"
                        placeholder="O que você está procurando?"
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
    );
}

export default Header;
