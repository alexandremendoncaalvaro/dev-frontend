import styled from 'styled-components';

export const Image = styled.img`
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    background-color: ${(props) => props.$bgColor};
    display: ${(props) => props.$display};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    color: ${(props) => props.$fontColor};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    border-radius: ${(props) => props.$borderRadius};
    border: ${(props) => props.$border};
    overflow: ${(props) => props.$overflow};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    bottom: ${(props) => props.$bottom};
    object-fit: ${(props) => props.$objectFit};
    aspect-ratio: ${(props) => props.$aspectRatio};
    image-rendering: pixelated;
    z-index: ${(props) => props.$zIndex};

    @media (min-width: 1366px) and (max-width: 1920px) {
        display: ${(props) => props.$display1366to1920};
        width: ${(props) => props.$w1366to1920};
        height: ${(props) => props.$h1366to1920};
    }

    @media (min-width: 1024px) and (max-width: 1367px) {
        display: ${(props) => props.$display1024to1366};
        width: ${(props) => props.$w1024to1366};
        height: ${(props) => props.$h1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        display: ${(props) => props.$display390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
    }

    @media (max-width: 390px) {
        display: ${(props) => props.$displaySmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
    }

    @media (min-width: 853px) and (min-height: 1193px) {
        height: ${(props) => props.$h1600x2560};
        width: ${(props) => props.$w1600x2560};
        display: ${(props) => props.$display1600x2560};
    }
`;
