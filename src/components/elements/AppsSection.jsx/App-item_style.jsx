import styled from 'styled-components'


export const StyledUl = styled.ul`
    padding:2%;
`

export const AppListItem = styled.li`
    width:100%;
    min-height: 120px;
    padding-bottom:10%;
    a { display: block;}
`

export const AppItemWrapper = styled.div `
    display: flex;flex-flow: row nowrap;       
    justify-content: space-between;
    align-items: center;

/*  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: contain; */
`

export const AppLogoWrapper = styled.div`
    width:50%; text-align: left;
    img { max-width:100%; height:auto; max-height: 70px; padding: 1%;}
    &:hover img {
        border: 2px dotted blue;
        border-radius:5px;
        transition: all 0.1s ease-in-out;
    }
`

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 1;
    top: -42px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
`


export const AppLinksWrapper = styled.div `
    min-width: 30%;
    display: flex;flex-flow: row nowrap;
    justify-content: space-between;
    &:hover ${StyledTooltip} { visibility: visible; }

`

export const AppLink = styled.div`

    @media screen and (max-width: 600px) {height: 3em;width: 3em;}
    @media screen and (min-width: 600px) { height: 4em;width: 4em;}
    position: relative;
    border: 1px solid grey;border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    img {  max-width:80%; height:auto; max-height: 70px;}
    &:hover {
        border: 2px dotted blue;
        border-radius:5px;
        transition: all 0.1s ease-in-out;        
    }

`