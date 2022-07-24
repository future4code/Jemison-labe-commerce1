import React from "react";
import styled from "styled-components";
import FooterListaItem from "./FooterListaItem";

import logo1 from "../../img/icones/instagram2.svg";
import logo2 from "../../img/icones/twitter2.svg";
import logo3 from "../../img/icones/facebook2.svg";
import logo4 from "../../img/icones/youtube2.svg";

import bandeira1 from "../../img/bandeiras/mastercard.svg";
import bandeira2 from "../../img/bandeiras/visa.svg";
import bandeira3 from "../../img/bandeiras/american-express.svg";
import bandeira5 from "../../img/bandeiras/picpay.svg";
import bandeira6 from "../../img/bandeiras/ame-digital.svg";
import bandeira7 from "../../img/bandeiras/boleto.svg";
import bandeira8 from "../../img/bandeiras/elo.svg";
import bandeira9 from "../../img/bandeiras/diners.svg";
import bandeira10 from "../../img/bandeiras/paypal.svg";
import bandeira11 from "../../img/bandeiras/ebanx.svg";
import bandeira12 from "../../img/bandeiras/google-safe-browsing.svg";

const FooterContainer = styled.footer`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const FooterTopBg = styled.div`
    background-color: #ffffff;
    padding: 30px;
`;

const FooterTop = styled.div`
    max-width: 1130px;
    margin: 0 auto;
`;

const FooterTopInforme = styled.p`
    background-color: #ffc107;
    padding: 13px;
    border-radius: 5px;
    line-height: 1.05;
`;

const FooterIconesBg = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
`;

const FooterIconesTitulo = styled.p`
    margin-bottom: 15px;
`;

const BandeirasLista = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
`;

const FooterContatoBG = styled.div`
    background-color: #f7f7f7;
    padding: 36px;
`;

const FooterContato = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1130px;
    margin: 0 auto;
`;

const FooterSocial = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
`;

const FooterBottomBg = styled.div`
    background-color: #3b3a38;
    color: #ffffff;
    padding: 42px;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1130px;
    margin: 0 auto;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterTopBg>
                <FooterTop>
                    <FooterTopInforme>
                        Por medidas de segurança devido ao coronavírus
                        (Covid-19), nosso telefone de contato está desativado.
                        Nossa equipe de atendimento está disponível pelo e-mail{" "}
                        <strong>sac@labecommerce.com.br</strong> ou através de
                        nossas redes sociais. Obrigado pela compreensão.
                    </FooterTopInforme>

                    <FooterIconesBg>
                        <div>
                            <FooterIconesTitulo>
                                Formas de pagamento
                            </FooterIconesTitulo>
                            <BandeirasLista>
                                <li>
                                    <img src={bandeira1} />
                                </li>
                                <li>
                                    <img src={bandeira2} />
                                </li>
                                <li>
                                    <img src={bandeira3} />
                                </li>
                                <li>
                                    <img src={bandeira5} />
                                </li>
                                <li>
                                    <img src={bandeira6} />
                                </li>
                                <li>
                                    <img src={bandeira7} />
                                </li>
                                <li>
                                    <img src={bandeira8} />
                                </li>
                                <li>
                                    <img src={bandeira9} />
                                </li>
                                <li>
                                    <img src={bandeira10} />
                                </li>
                                <li>
                                    <img src={bandeira11} />
                                </li>
                            </BandeirasLista>
                        </div>

                        <div>
                            <FooterIconesTitulo>
                                Qualidade e Segurança
                            </FooterIconesTitulo>
                            <img src={bandeira12} />
                        </div>
                    </FooterIconesBg>
                </FooterTop>
            </FooterTopBg>

            <FooterContatoBG>
                <FooterContato>
                    <div>
                        <p>
                            JEMISONS EDITORA LTDA ME - CNPJ 00.000.000/0000-00
                        </p>{" "}
                        <p>Rua Ali Perto, 00 - São Paulo/SP/ CEP: 99999-999</p>
                    </div>

                    <div>
                        <p>Fone: (11) 99999-9999</p>
                        <p>Seg à sexta das 08h às 17h.</p>
                    </div>

                    <FooterSocial>
                        <FooterListaItem
                            link="https://www.instagram.com/"
                            logo1={logo1}
                            descricao="Instagram"
                        />
                        <FooterListaItem
                            link="https://www.twitter.com/"
                            logo1={logo2}
                            descricao="Twitter"
                        />
                        <FooterListaItem
                            link="https://www.facebook.com/"
                            logo1={logo3}
                            descricao="Facebook"
                        />
                        <FooterListaItem
                            link="https://www.youtube.com/"
                            logo1={logo4}
                            descricao="Youtube"
                        />
                    </FooterSocial>
                </FooterContato>
            </FooterContatoBG>

            <FooterBottomBg>
                <FooterBottom>
                    <p>
                        © 2022 - Alguns direitos reservados. Conteúdo fictício.
                    </p>

                    <p>
                        Tecnologia e Desenvolvimento por Daniel, Douglas e
                        Matheus.
                    </p>
                </FooterBottom>
            </FooterBottomBg>
        </FooterContainer>
    );
}

export default Footer;
