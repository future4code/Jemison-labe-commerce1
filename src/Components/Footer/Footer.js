import React from "react";

import {FooterContainer, FooterTopBg, FooterTop, FooterTopInforme, FooterIconesBg, FooterIconesTitulo, BandeirasLista, FooterContatoBG , FooterContato, FooterSocial, FooterBottomBg, FooterBottom} from "./StyledFooter"

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

 
export function Footer () {

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

                    
                </FooterContato>
            </FooterContatoBG>

            <FooterBottomBg>
                <FooterBottom>
                    <p>
                        © 2022 - Alguns direitos reservados. Conteúdo
                        fictício.
                    </p>

                    <p>
                        Tecnologia e Desenvolvimento por Daniel, Douglas,
                        Jéssica e Matheus.
                    </p>
                </FooterBottom>
            </FooterBottomBg>
        </FooterContainer>
    )
}