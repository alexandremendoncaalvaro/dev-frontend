import styled from 'styled-components';

export const Text = styled.p `
    color: ${(props) => props.$fontColor};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    font-family: ${(props) => props.$fontFamily};
    margin: ${(props) => props.$m};
    padding: ${(props) => props.$p};
    align-self: ${(props) => props.$alignSelf};
    border: ${(props) => props.$border};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    cursor: ${(props) => props.$cursor};
    height: ${(props) => props.$h};

    -webkit-text-stroke-color: ${(props) => props.$textStrokeColor};
    -webkit-text-stroke-width: ${(props) => props.$textStrokeWidth};
    letter-spacing: ${(props) => props.$letterSpacing};
`