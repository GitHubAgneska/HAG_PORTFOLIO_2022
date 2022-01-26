import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    position: relative; 
    border-bottom: 1px solid grey;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between; align-items: center;
    
    transition: height 1s ease-in-out;
    @media screen and (max-width: 600px) {height: 12vh;}
    @media screen and (min-width: 600px) {height: 100px;}
    a { 
        display: block;
        max-width: 10vh;
        &:hover { color: #0065FC; }
    }
`

export const MainLogoWrapper = styled.div`
    padding: 2%;
    width: 10%;
    transition: all 1s ease-in-out;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
    }
`

export const MainLogo = styled.img`
    max-width: 100%;
    height:auto;
`

