import styled from 'styled-components';
import defaultImg from '../images/default.jpg';

const StyledHero = styled.header `
    min-height: 331px;
    width: 588px;
    margin: 0 auto;
    background-image: url(${props => props.img ? props.img : defaultImg });
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero;