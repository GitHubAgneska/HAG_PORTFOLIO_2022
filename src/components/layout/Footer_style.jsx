import styled from 'styled-components'

export const FooterSection = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    
    @media screen and (max-width: 600px) {padding: 1rem 0 1rem; p { font-size: 0.7rem;}}
    @media screen and (min-width: 600px) {padding: 2rem 0 1.5rem; }
    p { margin: 0; padding: 0; }
`
