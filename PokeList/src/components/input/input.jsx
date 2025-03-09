import styled from "styled-components";

export const Input = styled.input `
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    font-size: ${(props) => props.$fontSize};
    border: ${(props) => props.$border};
    padding: ${(props) => props.$p};
    border-radius: ${(props) => props.$borderRadius};
    margin: ${(props) => props.$m};
`