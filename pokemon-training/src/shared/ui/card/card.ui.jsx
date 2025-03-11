import styled from 'styled-components';

export const Card = styled.div`
    height: ${(props) => props.$h};
    width: ${(props) => props.$w};
    background: ${(props) => props.$bgColor};
    box-shadow: ${(props) =>
        props.$boxShadow ||
        '10px 10px 8px 0 #0000003B, inset 3px 3px 7px 0 #0000001A'};
    border-radius: ${(props) => props.$borderRadius};
    max-width: ${(props) => props.$maxWidth};
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
    opacity: ${(props) => props.$opacity};
    border: ${(props) => props.$border};
    word-wrap: ${(props) => props.$wordWrap};
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$flexDirection};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    flex-wrap: ${(props) => props.$flexWrap};
    gap: ${(props) => props.$gap};
    overflow: ${(props) => props.$overflow};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
    transform: ${(props) => props.$transform};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    bottom: ${(props) => props.$bottom};
    z-index: 1;
    text-align: ${(props => props.$textAlign)};
    clip-path: ${(props) => props.$clipPath};
    outline: ${(props) => props.$outline};

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
        background-color: ${(props) => props.$bgColor1024to1366};
        box-shadow: ${(props) => props.$boxShadow1024to1366};
        border-radius: ${(props) => props.$borderRadius1024to1366};
        padding: ${(props) => props.$p1024to1366};
        gap: ${(props) => props.$gap1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        display: ${(props) => props.$display390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
        position: ${(props) => props.$position390to1024};
        justify-content: ${(props) => props.$justifyContent390to1024};
        gap: ${(props) => props.$gap390to1024};
        padding: ${(props) => props.$p390to1024};
        border-radius: ${(props) => props.$borderRadius390to1024};
        box-shadow: ${(props) => props.$boxShadow390to1024};
        background-color: ${(props) => props.$bgColor390to1024};
        align-self: ${(props) => props.$alignSelf390to1024};
        align-items: ${(props) => props.$alignItems390to1024};
    }

    @media (max-width: 390px) {
        display: ${(props) => props.$displaySmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
        background-color: ${(props) => props.$bgColorSmall390};
        border-radius: ${(props) => props.$borderRadiusSmall390};
        box-shadow: ${(props) => props.$boxShadowSmall390};
        padding: ${(props) => props.$pSmall390};
    }

    @media (min-width: 853px) and (min-height: 1193px) {
        display: ${(props) => props.$display1600x2560};
        height: ${(props) => props.$h1600x2560};
        width: ${(props) => props.$w1600x2560};
        background-color: ${(props) => props.$bgColor1600x2560};
        border-radius: ${(props) => props.$borderRadius1600x2560};
        box-shadow: ${(props) => props.$boxShadow1600x2560};
        padding: ${(props) => props.$p1600x2560};
    }
`;
