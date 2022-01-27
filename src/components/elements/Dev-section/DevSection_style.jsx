import styled from 'styled-components'

export const StyledSection = styled.section`
    height: 90%;
    overflow: scroll;
    margin: auto;
    @media screen and (min-width: 600px) {}
    @media screen and (max-width: 600px) {}
    
    border-radius: 5px;
`

export const ListWrapper = styled.div`
padding:2%;
width: 100%;
display: flex; 
@media screen and (max-width: 600px) {flex-flow: column nowrap;}
@media screen and (min-width: 600px) {flex-flow: column wrap;}


`


