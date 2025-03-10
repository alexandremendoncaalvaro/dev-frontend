import styled from "styled-components";

export const Slider = styled.input`
    width: ${props => props.$w};
    height: ${props => props.$h};
    border-radius: ${props => props.$borderRadius};
    background: ${props => props.$background};
    outline: none;

    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: ${props => props.$thumbW || '20px'};
        height: ${props => props.$thumbH || '20px'};
        border-radius: ${props => props.$thumbBorderRadius || '50%'};
        background: ${props => props.$thumbBackground};
        cursor: ${props => props.$thumbCursor || 'pointer'};
    }

    &::-moz-range-thumb {
        width: ${props => props.$rangeW || '25px'};
        height: ${props => props.$rangeH || '25px'};
        border-radius: ${props => props.$rangeBorderRadius || '50%'};
        background: ${props => props.$rangeBackground};
        cursor: ${props => props.$rangeCursor || 'pointer'};
    }
`;
