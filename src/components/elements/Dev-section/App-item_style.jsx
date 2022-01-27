import styled from 'styled-components'

export const StyledTooltip = styled.span`
    visibility: hidden;
    width: 120px;
    position: absolute;
    z-index: 8;
    top: -42px;
    left: -24px;
    padding: 5px 0;
    font-size: 0.8em;
    text-align: center;
    color: #fff;
    background-color: black;
    border-radius: 6px;
`

export const AppListItem = styled.li `list-style-type:none`

export const AppItemWrapper = styled.div`
    width: 100%; 
    margin: 5% 0;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: white;
    border: 1px solid white; border-radius: 5px;
    
    /* border neon effect */
    box-shadow: 
                0 0 3px #fff,
                0 0 0.2rem #0fa,
                0 0 0.7rem #0fa,
                inset 0 0 0.2rem #0fa;


    @media screen and (max-width: 600px) { height: 12vh; }
    @media screen and (min-width: 600px) { height: 17vh; }
`

export const AppLogoWrapper = styled.div`

    /* border: 1px solid yellow; */

    position:relative;
    display: flex;

    text-align: left;
    padding: 3%;

    @media screen and (max-width: 600px) {
        flex-basis: 35%;
        max-height: 80px;
        max-width: 40%;
    }
    
    @media screen and (min-width: 600px) {
        flex-basis: 30%; 
        max-width:50%;
    }

    img {
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
        img:hover {
            box-shadow: 
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 03rem #bc13fe;
        }
        transition: all 0.2s ease-in-out;
    ` }
`
export const AppKeywordsWrapper = styled.div`
        height:100%;
        @media screen and (max-width: 600px) { flex-basis: 65%; }
        @media screen and (min-width: 600px) { flex-basis: 55%;}
        
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        padding: 1%;
        /* border: 1px solid yellow; */
        overflow:hidden;

        p:first-child { font-weight: bold;}
        p {
            margin: 0;
            font-size: calc(0.7vw + 0.3vh + 1.5vmin);
            overflow:hidden; text-overflow: ellipsis;
            
            border-left: 1px solid white;
            padding-left: 2%;
        }
        p:hover { overflow:visible;  }
`

export const AppLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 600px) { flex-basis:15%; flex-flow: column nowrap; }
    @media screen and (min-width: 600px) { flex-basis:20%; flex-flow: row nowrap;}
    justify-content: end;
`

export const AppLink = styled.div`
    position: relative;
    &:hover ${StyledTooltip} { visibility: visible; }
    margin: 0 5%;
`
export const LinkImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 600px) { height: 5vh; width: 5vh; }
    @media screen and (min-width: 600px) { height: 9vh; width: 9vh; }
    
    border: 1px solid white; border-radius: 50%;
    
    img {  
        max-width:80%; height:auto; max-height: 70px;
    
    }
    &:hover {
        border-radius:5px;
        transition: all 0.1s ease-in-out; 
        /* border neon effect */
        box-shadow: 
                    0 0 0.8rem #bc13fe,
                    0 0 2.8rem #bc13fe,
                    inset 0 0 1.3rem #bc13fe;       
    }
`
