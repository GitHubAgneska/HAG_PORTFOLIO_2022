import styled from "styled-components";

export const StyledBurger = styled.div`
    font-size: 5vw;
    @media screen and (min-width: 600px) {opacity: 0;}
    @media screen and (max-width: 600px) {opacity: 1;}

    transition: opacity 0.3s linear;
    position: absolute;
    right: 2rem;
    display: flex; flex-direction: column;
    justify-content: space-around;
    width: 2em;
    height: 2em;

    z-index: 5;

    i { font-size: 6vh; color: grey; }

`