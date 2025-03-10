import styled from 'styled-components'

export const Container = styled.div `
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$flexDirection};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    background-color: ${(props) => props.$backgroundColor};
    background: ${(props) => props.$background};
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
    cursor: ${(props) => props.$cursor};
    background-image: ${(props) => props.$backgroundImage};
    background-size: ${(props) => props.$backgroundSize};
    background-repeat: ${(props) => props.$backgroundRepeat};
    background-position: ${(props) => props.$backgroundPosition};
    filter: ${(props) => props.$filter};
    z-index: ${(props) => props.$zIndex};
    backdrop-filter: ${(props) => props.$backdropFilter};
    -webkit-backdrop-filter: ${(props) => props.$backdropFilter};
    box-shadow: ${(props) => props.$boxShadow};
    justify-self: ${(props) => props.$justifySelf};
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.$hoverBackgroundColor};
        background: ${(props) => props.$hoverBackground};
        filter: ${(props) => props.$hoverFilter};
    }

    -ms-overflow-style: none;  
    scrollbar-width: none;  
`