import styled from "styled-components";


 export const HeaderContainer = styled.header`
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;


 export const HeaderMainBg = styled.div`
    background-color: #00acb7;
    padding: 25px;
    font-size: 1rem;
    line-height: 1;
`;

export const HeaderMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 28px;
    align-items: center;
    max-width: 1130px;
    margin: 0 auto;
    a{
        color: white;
        text-decoration:none;
        font-size: 1.2rem;
    }
`;

export const HeaderMainBusca = styled.input`
    padding: 10px 25px;
    border: 1px solid #00acb7;
    outline: none;
    border-radius: 15px;
    font-size: 0.875rem;
    line-height: 1;
`;

export const HeaderMainNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
