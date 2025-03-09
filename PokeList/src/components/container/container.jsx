import styled from 'styled-components'

export const Container = styled.div `
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$flexDirection};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    background-color: ${(props) => props.$backgroundColor};
    gap: ${(props) => props.$gap};
    flex-wrap: ${(props) => props.$flexWrap};
    border-radius: ${(props) => props.$borderRadius};
    border: ${(props) => props.$border};
    border-top: ${(props) => props.$borderTop};
    border-bottom: ${(props) => props.$borderBottom};
    border-left: ${(props) => props.$borderLeft};
    border-right: ${(props) => props.$borderRight};
    padding: ${(props) => props.$p};
    margin: ${(props) => props.$m};
    overflow: ${(props) => props.$overflow};
    max-height: ${(props) => props.$maxHeight};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    align-self: ${(props) => props.$alignSelf};
    grid-template-columns: ${(props) => props.$gridTemplateColumns};
    grid-template-rows: ${(props) => props.$gridTemplateRows};
    grid-column: ${(props) => props.$gridColumn};
    grid-row: ${(props) => props.$gridRow};
    grid-row-start: ${(props) => props.$gridRowStart};

    -ms-overflow-style: none;  
    scrollbar-width: none;  
`