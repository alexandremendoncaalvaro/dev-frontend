import styled from "styled-components";

export const Button = styled.button`
    position: ${(props) => props.$position };
    width: ${(props) => props.$width || "10vh"};
    height: ${(props) => props.$height || "11%"};
    background: var(--light-blue);
    transform: ${(props) => `rotate(${props.$rotate})`};
    border-radius: ${(props) => props.$borderRadius || "10rem"};
    box-shadow: ${(props) => props.$boxShadow};
    border: solid 0.5rem var(--dark-blue);
    display: flex;
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    padding: ${(props) => props.$p};
    align-items: center;
    justify-content: center;
    cursor: pointer !important;
    z-index: 2;
    font-family: "Jersey 20", sans-serif;
    &:disabled {
        background: var(--dark-blue);
        cursor: not-allowed !important;
    }
    &:hover {
        background: var(--medium-blue);
    }
`

