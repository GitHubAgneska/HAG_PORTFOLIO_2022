import styled from 'styled-components'

export const StyledBurger = styled.div`
    position: absolute;
    width: 2em;
    height: 2em;
    right:0;
    display: flex; flex-direction: column;
    justify-content: space-around;
    font-size: 5vw;
    @media screen and (min-width: 600px) {opacity:0;}
    @media screen and (max-width: 600px) {opacity: 1;}
    transition: opacity 0.3s linear;
    i { font-size: 6vh; color: white; }
`
