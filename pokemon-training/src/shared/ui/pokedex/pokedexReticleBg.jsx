import styled from 'styled-components';
import reticle from '@assets/images/reticle.jpg';

export const Reticle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: url(${reticle});
    mix-blend-mode: soft-light;
    background-size: cover;
    position: ${(props => props.$position)}
    
       
`