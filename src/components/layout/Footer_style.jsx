import styled from 'styled-components'

export const FooterSection = styled.footer`
    position: fixed;
    bottom: 0;

    height:5%;
    width: 100%;
    background: white;
    
    display: flex;
    justify-content: center;
    border-top: 1px solid #ccc;
    
    @media screen and (max-width: 600px) {padding: 1rem 0 1rem; p { font-size: 0.7rem;}}
    @media screen and (min-width: 600px) {padding: 2rem 0 1.5rem; }
    /* p { margin: 0; padding: 0; } */
`

/* 
.footer-wrapper {
    height: 200px; // 13.4375em
    width:100vw;
    @include flex(col, nowrap);
    justify-content: center;
    align-items: center;
    background-color: black;
    margin-top: 50px;
    
    .footer {

        &__logo-wrapper {
            margin:auto;
            @include max-600px { width: 120px;}
            @include min-600px { width:130px;}
            height:40px;
            img { max-width: 100%;}
        }
        &__credentials {
            p {text-align: center; color:$white; }
        }
    }
} */