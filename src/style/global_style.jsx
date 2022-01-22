import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        scroll-behavior: smooth;
    }
    html {
        font-size: 100%; /* = 16px default */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    /* a { text-decoration: none; } */
    /* input { border: transparent; } */
    ul { margin: 0; padding: 0;}
    ul li { list-style: none; }
    button { display: block; border: none; }
`
export const StyledSection = styled.section `
    width: 70%; margin: 5% auto;
    padding: 5%;
    border: 2px solid grey; border-radius: 5px; 
`

/* accessibility - .sr-only class */
export const SrOnlyH1 = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;

export const SrOnlyH2 = styled.h2`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;


