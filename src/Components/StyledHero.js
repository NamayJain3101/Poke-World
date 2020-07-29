import styled from 'styled-components';
import defaultImg from '../images/default.jpg';

const StyledHero = styled.header `
    min-height: calc(100vh - 66px);
    width: 100%;
    background-image: url(${props => props.img ? props.img : defaultImg });
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero;