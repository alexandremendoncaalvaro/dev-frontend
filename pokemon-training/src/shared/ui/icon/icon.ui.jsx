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
    cursor: ${(props) => (props.onClick ? 'pointer' : props.$cursor ? props.$cursor : 'default')};
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

    

    @media (min-width: 1366px) and (max-width: 1600px) {
        display: ${(props) => props.$display1366to1600};
        width: ${(props) => props.$w1366to1600};
        height: ${(props) => props.$h1366to1600};
        position: ${(props) => props.$position1366to1600};
    }

    @media (min-width: 1024px) and (max-width: 1367px) {
        display: ${(props) => props.$display1024to1366};
        width: ${(props) => props.$w1024to1366};
        height: ${(props) => props.$h1024to1366};
        position: ${(props) => props.$position1024to1366};
        margin-left: ${(props) => props.$ml1024to1366};
        right: ${(props) => props.$right1024to1366};
        left: ${(props) => props.$left1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        display: ${(props) => props.$display390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
        position: ${(props) => props.$position390to1024};
        align-self: ${(props) => props.$alignSelf390to1024};
        z-index: ${(props) => props.$zIndex390to1024};
    }

    @media (max-width: 390px) {
        display: ${(props) => props.$displaySmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
        position: ${(props) => props.$positionSmall390};
        z-index: ${(props) => props.$zIndexSmall390};
        padding: ${(props) => props.$pSmall390};
        justify-content: ${(props) => props.$justifyContentSmall390};
        align-self: ${(props) => props.$alignSelfSmall390};
    }

    @media (min-width: 853px) and (min-height: 1193px) {
        height: ${(props) => props.$h1600x2560};
        width: ${(props) => props.$w1600x2560};
        display: ${(props) => props.$display1600x2560};
        align-self: ${(props) => props.$alignSelf1600x2560};
        z-index: ${(props) => props.$zIndex1600x2560};
        padding: ${(props) => props.$p1600x2560};
    } 
`;
