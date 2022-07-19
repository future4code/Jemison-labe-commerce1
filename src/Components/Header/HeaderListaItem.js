import React from "react";
import styled from "styled-components";

const HeaderSocial = styled.li`
    list-style: none;
`;

const HeaderIcones = styled.img`
    min-width: 14px;
    max-width: 14px;
`;

function HeaderListaItem(props) {
    return (
        <HeaderSocial>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <HeaderIcones src={props.logo1} alt={props.descricao} />
            </a>
        </HeaderSocial>
    );
}

export default HeaderListaItem;
