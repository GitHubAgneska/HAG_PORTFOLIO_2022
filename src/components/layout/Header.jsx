import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledHeader, MainLogoWrapper, MainLogo, NavLinksWrapper } from './Header_style'
import {SrOnlyH1 } from '../../style/global_style'
import hagLogo from '../../assets/logos/hag_logo_2020_small.png'
import  Burger from '../elements/burger/Burger'

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    return(

        <StyledHeader>
            
            <MainLogoWrapper>
                <Link to="/"><MainLogo src={hagLogo} alt="hag Logo" /></Link>
                <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1>
            </MainLogoWrapper>

            <Burger open={burgerOpen} setOpen={setBurgerOpen} />
            
            <NavLinksWrapper>
                <Link to="/" aria-label="Development"><p>Development</p></Link>
                <Link to="/" aria-label="Webdesigns"><p>Webdesign</p></Link>
                <Link to="/" aria-label="Infos"><p>Infos</p></Link>
            </NavLinksWrapper>

        </StyledHeader>
    )
}

export default Header