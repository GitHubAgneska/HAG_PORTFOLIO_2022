import styled from 'styled-components'

export const StyledHeader = styled.header`
    position: relative; 
    border-bottom: 1px solid grey;
    width: 85vw; margin: auto;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between; align-items: center;
    transition: height 1s ease-in-out;
    @media screen and (max-width: 600px) {height: 12vh;}
    @media screen and (min-width: 600px) {height: 15vh;}
    a { 
        display: block;
        max-width: 10vh;
        &:hover { color: #0065FC; }
    }
`;

export const MainLogoWrapper = styled.div`
padding: 2%;
width: 15%;
transition: all 1s ease-in-out;

img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
}
`;

export const MainLogo = styled.img`
    max-width: 100%;
    height:auto;
`

export const SyledNav = styled.nav`
    display:flex;
    transition: background-color 0.3s ease-in-out;
    
    @media screen and (max-width: 600px) { 
        ${ ({burgerOpen}) => burgerOpen && `
            position:fixed; 
            top: 11vh; left: 0; bottom: 0;
            flex-flow: column nowrap;
            width: 100vw;
            z-index:3;
            overflow: hidden;
            background-color: lightgrey;
            color: white;
            justify-content: center; align-items:center;
            a { width: 100%; max-width: unset; }
            a p { 
                font-size:1.5em; color: white;text-transform: uppercase; font-size:2em;
            }
        `}
        ${ ({burgerOpen}) => !burgerOpen && `visibility: hidden;`}
    }
    @media screen and (min-width: 600px) { 
        flex-flow: row wrap;
        width: 60%;
        justify-content: space-between;
        transition: width 1s ease-in-out;
    }
`