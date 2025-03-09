import styled from 'styled-components';

const columns = [
    '0',
    '8.333333%',
    '16.666667%',
    '25%',
    '33.333333%',
    '41.666667%',
    '50%',
    '58.333333%',
    '66.666667%',
    '75%',
    '83.333333%',
    '91.666667%',
    '100%',
];

export const Col = styled.div`
    position: ${(props) => props.$position};
    width: ${(prop) => prop.$w || '100%'};
    height: ${(prop) => prop.$h};
    max-width: ${(prop) => columns[prop.$columns]};
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
    transform: ${(props) => props.$rotate};
    background-color: ${(props) => props.$bgColor};
    align-items: ${(props) => props.$alignItems};
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$flexDirection};
    gap: ${(props) => props.$gap};
    justify-content: ${(props) => props.$justifyContent};
    box-shadow: ${(props) => props.$boxShadow};
    border-radius: ${(props) => props.$borderRadius};

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
        max-width: ${(prop) => columns[prop.$columns1024to1366]};
        padding-bottom: ${(props) => props.$pb1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        display: ${(props) => props.$display390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
        position: ${(props) => props.$position390to1024};
        justify-content: ${(props) => props.$justifyContent390to1024};
        gap: ${(props) => props.$gap390to1024};
        padding: ${(props) => props.$p390to1024};
        max-width: ${(prop) => columns[prop.$columns390to1024]};
    }

    @media (max-width: 390px) {
        display: ${(props) => props.$displaySmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
        max-width: ${(prop) => columns[prop.$columnsSmall390]};
        gap: ${(props) => props.$gapSmall390};
        padding: ${(props) => props.$pSmall390};
    }

    @media (min-width: 853px) and (min-height: 1193px) {
        display: ${(props) => props.$display1600x2560};
        max-width: ${(prop) => columns[prop.$columns1600x2560]};
        justify-content: ${(props) => props.$justifyContent1600x2560};
        gap: ${(props) => props.$gap1600x2560};
        padding: ${(props) => props.$p1600x2560};
    }
`;
