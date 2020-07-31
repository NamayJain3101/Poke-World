import styled from 'styled-components';
import defaultImg from '../images/default.jpg';

const StyledHero = styled.header `
    height: 30vh;
    width: 50vh;
    margin: 2rem auto 0 auto;
    background-image: url(${props => props.img ? props.img : defaultImg });
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 812px) {
        height: 340px;
        width: 588px;
    }
    @media(max-height: 500px) and (max-width:812px) {
        height: 50vh;
        width: 90vh;
    }
`

export default StyledHero;