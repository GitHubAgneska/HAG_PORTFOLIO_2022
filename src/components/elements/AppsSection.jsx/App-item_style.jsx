import styled from 'styled-components'

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 1;
    top: -42px;
    left: -24px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
`

export const StyledUl = styled.ul`
    display: flex; 
    @media screen and (max-width: 600px) {flex-flow: column nowrap;}
    @media screen and (min-width: 600px) {flex-flow: column wrap;}
    padding:2%;
`

export const AppListItem = styled.li`
    display: flex;
    @media screen and (min-width: 600px) { width: 50%; margin:auto; min-height: 120px;}
    padding-bottom:10%;
    a { display: block;}
`

export const AppItemWrapper = styled.div`
    display: flex;flex-flow: row nowrap;       
    flex-shrink: 4;
    padding: 2%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ff741b; border-radius: 5px;
`

export const AppLogoWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 600px) { max-height: 80px; max-width: 40%;}
    @media screen and (min-width: 600px) { max-height: 100px;  max-width:50%;}
    overflow: hidden;
    text-align: left;
    img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        padding: 1%;
        object-fit: contain;
    }
    &:hover ${StyledTooltip} { visibility: visible; }
    ${ ({isDeployed}) => !isDeployed && `
        img { opacity: 0.1;}
    `}

    ${ ({isDeployed}) => isDeployed && `
        &:hover img {
            border: 2px dotted blue;
            border-radius:5px;
            overflow: visible;
            transition: all 0.1s ease-in-out;
        }
    ` }
`



export const AppLinksWrapper = styled.div`
    min-width: 30%;
    display: flex;flex-flow: row nowrap;
    justify-content: space-between;
`

export const AppLink = styled.div`
    width: 50%;
    position: relative;
    &:hover ${StyledTooltip} { visibility: visible; }
    
`
export const LinkImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media screen and (max-width: 600px) { height: 2em;width: 2em; }
    @media screen and (min-width: 600px) { height: 2.5em;width: 2.5em; }
    border: 1px solid grey;border-radius: 50%;
    background:white;
    img {  max-width:80%; height:auto; max-height: 70px;}

    &:hover {
        border: 2px dotted blue;
        border-radius:5px;
        transition: all 0.1s ease-in-out;        
    }
`
