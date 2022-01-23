import styled from 'styled-components'

export const StyledInfoSection = styled.section`
    margin:auto;
    @media screen and (min-width: 600px) {width: 70%; }
    @media screen and (max-width: 600px) {width: 85%;}
    img { max-width:100%; height:auto; }
    margin: 5% auto;
`

export const InfoSectionWrapper = styled.div`
    a p { 
        
        @media screen and (min-width: 600px) {width : 30%; }
        @media screen and (max-width: 600px) {}
        margin: auto;
        border: 1px solid blue; border-radius: 5px;
        &:hover {border: 1px solid pink; }
    }
`

export const InfoPres =  styled.div`
    display: flex; flex-flow: row nowrap;
    align-items:center;
    width:100%;
    border:1px dotted red;border-radius: 5px;
    @media screen and (min-width: 600px) {padding: 5%; margin: 5%; }
    @media screen and (max-width: 600px) {margin-bottom: 5%;}
    transition: all 0.3s linear;
    
    div:first-child { 
        width: 30%;
        img {
            max-width:100%;
            height:auto;
            max-height: 80px;
            border-radius: 50%;
        }
    }
    div:nth-child(2) {
        h1, h2 {
            font-size: 1em;
            text-align: left;
            margin:0% auto 0% 2%;
        } 
        h1 { color: grey; }
        h2 { color: purple: }

    } 
`