import styled from 'styled-components'

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 5;
    top: -42px;
    left: -24px;
    padding: 5px 0;
    font-size: 0.8em;
    text-align: center;
    color: #fff;
    background-color: black;
    border-radius: 6px;
`

export const AppListItem = styled.li`list-style-type:none`

export const AppItemWrapper = styled.div`
    width: 100%;
    height: 15vh;
    
    display: flex;
    flex-flow: row nowrap;
    align-items: center; 
    color: white;
    border: 2px solid white; border-radius: 5px;

    overflow: hidden;
`

export const AppLogoWrapper = styled.div`

    border: 1px solid yellow;

    position:relative;
    display: flex;

    @media screen and (max-width: 600px) {
        flex-basis: 25%;
        max-height: 80px;
        max-width: 40%;
    }
    
    @media screen and (min-width: 600px) {
        flex-basis: 30%; 
        max-height: 100px;  max-width:50%;
    }

    text-align: left;
    padding: 1%;
    
    img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        object-fit: contain;
        object-position: left;
    }
    ${ ({isDeployed}) => !isDeployed && `
        img { opacity: 0.3;}
        &:hover ${StyledTooltip} { visibility: visible; }
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
export const AppKeywordsWrapper = styled.div`
        height:100%;
        flex-basis: 50%;
        display: flex;
        flex-flow: column wrap;
        padding: 1%;
        border: 1px solid yellow;
        overflow:hidden;

        p {
            width: 50%;
            margin: 0;
            font-size: calc(0.7vw + 0.3vh + 1vmin);
            text-overflow: ellipsis;
        }
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
    @media screen and (min-width: 600px) { height: 3em;width: 3em; }
    border: 1px solid white; border-radius: 50%;
    img {  max-width:80%; height:auto; max-height: 70px;}

    &:hover {
        
        border-radius:5px;
        transition: all 0.1s ease-in-out;        
    }
`
