import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {SrOnlyH1 } from '../../style/global_style'
import hagLogo from '../../assets/logos/hag_logo_2020_small.png'

const StyledNav = styled.nav`
border: 2px solid grey;
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`;

const MainLogoWrapper = styled.div`
    width: 1rem; // 200px;
    min-width: 135px;
`;
const MainLogo = styled.img`
    max-width: 50%;
`

const NavLinksWrapper = styled.div`
border: 2px solid red;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    min-width: 30%;
`


const Header = () => { 
    return(
        <StyledNav>
            <MainLogoWrapper>
                <Link to="/"><MainLogo src={hagLogo} alt="hag Logo" /></Link>
                <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1>
            </MainLogoWrapper>

            <NavLinksWrapper>
                <Link to="/"><p>Webdesign</p></Link>
                <Link to="/"><p>Infos</p></Link>
            </NavLinksWrapper>

        </StyledNav>
    )
}

export default Header