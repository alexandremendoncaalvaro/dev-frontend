import React from 'react';
import styled from 'styled-components';

export const Text = styled(({ $textType = 'p', ...props }) =>
    React.createElement($textType, props)
)`
    font-size: ${({ $fontSize, $textType }) => {
        if ($fontSize) return $fontSize;
        switch ($textType) {
            case 'h1':
                return '2.5rem';
            case 'h2':
                return '2rem';
            case 'h3':
                return '1.75rem';
            case 'h4':
                return '1.5rem';
            case 'h5':
                return '1.25rem';
            case 'h6':
                return '1rem';
            case 'p':
            default:
                return '1rem';
        }
    }};
    font-weight: ${(props) => props.$fontWeight};
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
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
    color: ${(props) => props.$textColor};
    text-align: ${(props) => props.$textAlign};
    cursor: ${(props) =>
        props.onClick
            ? 'pointer'
            : props.$textCursor
            ? props.$textCursor
            : 'default'};
    text-decoration: ${(props) => props.$textDecoration};
    text-transform: ${(props) => props.$textTransform};
    line-height: ${(props) => props.$textLineHeight};
    letter-spacing: ${(props) => props.$textLetterSpacing};
    background-color: ${(props) => props.$bgColor};
    border-radius: ${(props) => props.$borderRadius};
    border: ${(props) => props.$border};
    display: ${(props) => props.$display};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    align-self: ${(props) => props.$alignSelf};

    @media (min-width: 1366px) and (max-width: 1920px) {
        font-size: ${(props) => props.$fontSize1366to1920};
        width: ${(props) => props.$w1366to1920};
        height: ${(props) => props.$h1366to1920};
    }

    @media (min-width: 1024px) and (max-width: 1367px) {
        font-size: ${(props) => props.$fontSize1024to1366};
        width: ${(props) => props.$w1024to1366};
        height: ${(props) => props.$h1024to1366};
        display: ${(props) => props.$display1024to1366};
        padding: ${(props) => props.$p1024to1366};
    }

    @media (min-width: 390px) and (max-width: 1024px) {
        font-size: ${(props) => props.$fontSize390to1024};
        width: ${(props) => props.$w390to1024};
        height: ${(props) => props.$h390to1024};
        display: ${(props) => props.$display390to1024};
        padding: ${(props) => props.$p390to1024};
        margin: ${(props) => props.$m390to1024};
    }

    @media (max-width: 390px) {
        font-size: ${(props) => props.$fontSizeSmall390};
        width: ${(props) => props.$wSmall390};
        height: ${(props) => props.$hSmall390};
        display: ${(props) => props.$displaySmall390};
        padding: ${(props) => props.$pSmall390};
    }

    @media (min-width: 853px) and (min-height: 1193px) {
        font-size: ${(props) => props.$fontSize1600x2560};
        width: ${(props) => props.$w1600x2560};
        height: ${(props) => props.$h1600x2560};
        display: ${(props) => props.$display1600x2560};
        padding: ${(props) => props.$p1600x2560};
        margin: ${(props) => props.$m1600x2560};
    }
`;
