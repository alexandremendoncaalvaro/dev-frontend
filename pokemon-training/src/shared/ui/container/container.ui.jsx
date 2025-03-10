import styled from 'styled-components';

export const Container = styled.div`
    width: ${(props) => props.$w || '100%'};
    height: ${(props) => props.$h || '100%'};
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
    position: ${(props) => props.$position};
    cursor: ${(props) => props.$cursor};
    background: ${(props) => props.$bgColor};
    display: ${(props) => props.$display || 'block'};
    flex-direction: ${(props) => props.$flexDirection};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    flex-wrap: ${(props) => props.$flexWrap};
    gap: ${(props) => props.$gap};
    filter: ${(props) => props.$filter};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    bottom: ${(props) => props.$bottom};
    border-radius: ${(props) => props.$borderRadius};
    box-shadow: ${(props) => props.$boxShadow};
    border: ${(props) => props.$border};
    transform: ${(props) => props.$transform};
    overflow: ${(props) => props.$overflow};
    z-index: ${(props) => props.$zIndex};
    grid-template-columns: ${(props => props.$gridTemplateColumns)};
    grid-template-rows: ${(props => props.$gridTemplateRows)};
    box-shadow: ${(props) => props.$boxShadow};


    &:focus {
        outline: ${(props) => props.$outline};
    }

    @media (min-width: 1366px) and (max-width: 1920px) {
        display: ${(props) => props.$display1366to1920};
        width: ${(props) => props.$w1366to1920};
        height: ${(props) => props.$h1366to1920};
        position: ${(props) => props.$position1366to1920};
    }

    @media (min-width: 1024px) and (max-width: 1367px) {
        display: ${(props) => props.$display1024to1366};
        width: ${(props) => props.$w1024to1366};
        height: ${(props) => props.$h1024to1366};
        position: ${(props) => props.$position1024to1366};
        z-index: ${(props) => props.$zIndex1024to1366};
        padding: ${(props) => props.$p1024to1366};
        gap: ${(props) => props.$gap1024to1366};
        justify-content: ${(props) => props.$justifyContent1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        display: ${(props) => props.$display390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
        position: ${(props) => props.$position390to1024};
        justify-content: ${(props) => props.$justifyContent390to1024};
        gap: ${(props) => props.$gap390to1024};
        padding: ${(props) => props.$p390to1024};
        margin-left: ${(props) => props.$ml390to1024};
        flex-direction: ${(props) => props.$flexDirection390to1024};
    }

    @media (max-width: 390px) {
        display: ${(props) => props.$displaySmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
        position: ${(props) => props.$positionSmall390};
        z-index: ${(props) => props.$zIndexSmall390};
        padding: ${(props) => props.$pSmall390};
        justify-content: ${(props) => props.$justifyContentSmall390};
        gap: ${(props) => props.$gapSmall390};
        margin-left: ${(props) => props.$mlSmall390};
    }
    
    @media (min-width: 853px) and (min-height: 1193px) {
        display: ${(props) => props.$display1600x2560};
        width: ${(props) => props.$w1600x2560};
        height: ${(props) => props.$h1600x2560};
        padding: ${(props) => props.$p1600x2560};
        justify-content: ${(props) => props.$justifyContent1600x2560};
        z-index: ${(props) => props.$zIndex1600x2560};
        position: ${(props) => props.$position1600x2560};
        margin: ${(props) => props.$m1600x2560};
        align-self: ${(props) => props.$alignSelf1600x2560};
        gap: ${(props) => props.$gap1600x2560};
    }
`;
