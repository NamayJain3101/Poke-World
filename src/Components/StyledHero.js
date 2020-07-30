import styled from 'styled-components';
import defaultImg from '../images/default.jpg';

const StyledHero = styled.header `
    height: 30vh;
    margin: 2rem auto 0 auto;
    background-image: url(${props => props.img ? props.img : defaultImg });
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px) {
        height: 331px;
        width: 588px;
    }
`

export default StyledHero;