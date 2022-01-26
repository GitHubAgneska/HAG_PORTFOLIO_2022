import styled from 'styled-components'
import '@fontsource/shrikhand'

export const StyledNav = styled.nav`
    font-family: 'Shrikhand';
    display: flex;
    a { padding: 3%; }
    a p { color: white;}
    a:hover, a:active { 
        border:1px solid white;border-radius:5px;
        text-shadow:
                /* White glow */
                    0 0 10px #fff,
                /* Green glow */
                    0 0 42px #0fa,
                    0 0 82px #0fa,
                    0 0 92px #0fa,
                    0 0 102px #0fa,
                    0 0 151px #0fa;
                    transition: all 0.3s linear;
    }

    /* text-shadow: 0 0 10px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; */
    
    ${({ hostParent }) => hostParent === 'home' && `
        
        flex-flow: column nowrap;  
        
        @media screen and (min-width: 600px) {
            height:60%; 
            margin: 3% 8.5%;
            font-size: 50px;
            a:first-child {  align-self: end; margin-left: 8.5%; }
            a:nth-child(2) { align-self: start;}
            a:nth-child(3) { align-self: end; }
            a p { margin: 0; }
            justify-content: space-between;
        }
        @media screen and (max-width: 600px) {
            font-size: 30px;
            a { align-self: initial; width: unset; p { text-align: center; }}
            justify-content: center;
        }
    `}


    z-index:5;
    transition: background-color 0.3s ease-in-out;

    ${({ hostParent }) => hostParent !== 'home' && `
        @media screen and (max-width: 600px) { 
            ${({ burgerOpen }) => burgerOpen && `
                position:fixed; 
                top: 11vh;
                flex-flow: column nowrap;
                
                z-index:3;
                overflow: hidden;
                background-color: #ffc39d;
                color: white;
                justify-content: center; align-items:center;
                -webkit-box-shadow: 0px 13px 34px 2px rgba(35,1,45,0.69); 
                box-shadow: 0px 13px 34px 2px rgba(35,1,45,0.69);
                a { width: 100%; max-width: unset; }
                a p { font-size:1.5em; color: white; text-transform: uppercase; font-size:1.3em; }
                .active { text-decoration: none; font-weight: bold; p { border-bottom:1px solid white; border-top:1px solid white;} }
            `}
            ${({ burgerOpen }) => !burgerOpen && 'visibility: hidden;'}
        }
    
    `}

    /* @media screen and (min-width: 600px) {
        .active { text-decoration: underline; font-weight: bold; }
        flex-flow: row wrap;
        width: 60%;
        justify-content: space-between;
        transition: width 1s ease-in-out;
    } */
`