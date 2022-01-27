import styled from 'styled-components'
import '@fontsource/questrial'

export const StyledInfoSection = styled.section`
    width:100%;
    margin: 5% 0%;
    border: 1px solid white; border-radius: 5px;
    
    /* border neon effect */
    box-shadow: 
                0 0 0.8rem #bc13fe,
                0 0 2.8rem #bc13fe,
                inset 0 0 1.3rem #bc13fe;


    img { max-width:100%; height:auto; }
    color: white; font-family: 'Questrial';
`

export const InfoSectionWrapper = styled.div`
    padding:5%;
    display: flex;
    align-items:center;
    @media screen and (max-width: 600px) {flex-flow: column nowrap;}
    @media screen and (min-width: 600px) {flex-flow: row nowrap; justify-content: space-between; }
`

export const InfoPres =  styled.div`

    border: 1px solid red;  
    height:90px;
    display: flex; flex-flow: row nowrap;
    flex-grow:1;
    align-items:center;

    @media screen and (min-width: 600px) {width: unset; }
    @media screen and (max-width: 600px) {width: 100%}
    transition: all 0.3s linear;
    
    /* headshot */
    div:first-child { 
        flex-basis: 30%;
        flew-grow: 2;
        padding:2%;
        img {
            max-width:100%; height:auto;
            max-height: 80px;min-width: 80px;
            border-radius: 50%;
        }
    }

`
export const InfoPresText = styled.div`
    flex-basis: 70%;
    line-height:1.2;
    overflow: hidden;
    max-height: 100%;
    text-overflow: ellipsis;
    h1, h2, h3 {margin: 0;}
    
    h1, h2 {font-size: calc(1.5vw + 0.3vh + 1vmin); }
    h3 {font-size: calc(1vw + 1vh + 0.3vmin); }
    
    @media screen and (min-width: 1200px) {
        h1, h2 { font-size: calc(1.5vw + 0vh + 0vmin); }
    }
`

export const InfoPresLinks = styled.div`
    display: flex;
    align-items:center;
    @media screen and (max-width: 600px) {width: 100%;  flex-flow: column nowrap;}
    @media screen and (min-width: 600px) {width: 50%; flex-flow: row nowrap; }
`
export const GroupIconsWrapper = styled.div`
border: 1px solid red;  
    display: flex;
    align-items:center;
    flex-flow: row nowrap;
    @media screen and (max-width: 600px) {height:60px;}
    @media screen and (min-width: 600px) {justify-content: end;}
    div { margin: 5%; }
`

export const IconWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
    img {  
        max-width:100%; height:auto;
        max-height: 60px;min-width: 30px;
        border-radius: 50%;
    }
    img:hover {
        box-shadow: 
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 03rem #bc13fe;
        transition: all 0.3s linear;
    }
`
export const DownloadIconWrapper = styled(IconWrapper)`
border: 1px solid red;
        height:100px;
    img {  
        max-width:100%; height:auto;
        max-height: 90px;min-width: 40px;
    }

`