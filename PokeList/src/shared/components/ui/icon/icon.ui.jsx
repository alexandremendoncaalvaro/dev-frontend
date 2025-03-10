import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Icon = styled(SVG)`
    height: ${(props) => props.$h};
    width: ${(props) => props.$w};
    margin: ${(props) => props.$m};
    margin-right: ${(props) => props.$mr};
    margin-left: ${(props) => props.$ml};
    margin-top: ${(props) => props.$mt};
    margin-bottom: ${(props) => props.$mb};
    padding: ${(props) => props.$p};
    padding-right: ${(props) => props.$pr};
    padding-left: ${(props) => props.$pl};
    padding-top: ${(props) => props.$pt};
    padding-bottom: ${(props) => props.$pb};
    cursor: ${(props) => props.onClick ? 'pointer' : 'default'};
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.$bgColor};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    transform: ${(props) => props.$transform};
    z-index: ${(props) => props.$zIndex};
    border-radius: ${(props) => props.$borderRadius};
    display: ${(props) => props.$display};

    & path {
        fill: ${(props) => props.$fill};
        stroke: ${(props) => props.$stroke || 'none'};
    }

    & rect {
        fill: ${(props) => props.$fill};
    }

    &:hover {
        transform: ${(props) => props.$hoverTransform};
        background-color: ${(props) => props.$hoverBgColor};
        padding: ${(props) => props.$hoverP};
    }
`;
