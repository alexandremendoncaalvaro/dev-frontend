import styled from 'styled-components';

export const Text = styled.p `
    color: ${(props) => props.$fontColor};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    margin: ${(props) => props.$m};
    padding: ${(props) => props.$p};
    align-self: ${(props) => props.$alignSelf};
`