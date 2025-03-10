import styled from 'styled-components'

export const Image = styled.img `
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    border-radius: ${(props) => props.$borderRadius};
    image-rendering: ${(props) => props.$imageRendering};
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    padding: ${(props) => props.$p};
    margin: ${(props) => props.$m};
    background-color: ${(props) => props.$backgroundColor};
    background-image: ${(props) => props.$backgroundImage};
    background-size: ${(props) => props.$backgroundSize};
    background-position: ${(props) => props.$backgroundPosition};
    background-repeat: ${(props) => props.$backgroundRepeat};
`