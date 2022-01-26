import styled from 'styled-components'
import '@fontsource/questrial'

export const FooterSection = styled.footer`
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;left: 0;
    
    text-align:center;
    font-family: 'Questrial';

    p {margin: 0; }
    @media screen and (max-width: 600px) {height:30px; p { font-size:15px; }}
    @media screen and (min-width: 600px) {height:45px; p { font-size:25px; }}
`