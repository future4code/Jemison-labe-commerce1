import React from "react";
import styled from "styled-components";

const FooterSocial = styled.li`
    list-style: none;
`;

const FooterIcones = styled.img`
    height: 24px;
`;

function FooterListaItem(props) {
    return (
        <FooterSocial>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <FooterIcones src={props.logo1} alt={props.descricao} />
            </a>
        </FooterSocial>
    );
}

export default FooterListaItem;
