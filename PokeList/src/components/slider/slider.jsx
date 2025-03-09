import styled from "styled-components";

export const Slider = styled.input`
    -webkit-appearance: none;
    width: 60%;
    height: 10px;
    border-radius: 5px;
    background: #fff;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e4000f;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #04aa6d;
        cursor: pointer;
    }
`;
