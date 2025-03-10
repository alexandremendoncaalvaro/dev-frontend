import styled from 'styled-components';

export const Btn = styled.button`
    display: ${(props) => props.$display};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    margin: ${(props) => props.$m};
    padding: ${(props) => props.$p};
    align-self: ${(props) => props.$alignSelf};
    border-radius: ${(props) => props.$br};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    color: ${(props) => props.$fontColor};
    background: ${(props) => props.$bgColor};
    border: ${(props) => props.border};
    cursor: ${(props) => props.onClick ? 'pointer' : 'default'};
    opacity: ${(props) => props.$opacity};
    transition: all 0.3s ease-in-out;
    box-shadow: ${(props) =>
        props.$boxShadow ||
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)'};
    margin: ${(props) => props.$margin};
    position: ${(props) => props.$position};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    top: ${(props) => props.$top};
    bottom: ${(props) => props.$bottom};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
        background: ${(props) =>
            props.$bgColor ? `${props.$bgColor}80` : 'var(--blue-toggle)80'};
    }

    &:hover {
        color: ${(props) => (props.$disabled ? '' : props.$hoverFontColor)};
        background: ${(props) =>
            props.$disabled ? '' : props.$hoverBackgroundColor};
    }
`;
