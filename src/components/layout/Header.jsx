import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader, MainLogoWrapper, MainLogo, SyledNav, NavLinksWrapper } from './Header_style'
import { SrOnlyH1 } from '../../style/global_style'
import hagLogo from '../../assets/logos/hag_logo_2020_small.png'
import Burger from '../elements/burger/Burger'
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'

const Header = () => {
  
  const [burgerOpen, setBurgerOpen] = useState(false)
  
  const handleClick = () => {
    setBurgerOpen(!burgerOpen)
    /* !burgerOpen ? document.body.style = 'position:fixed' : document.body.style = 'position:initial' */
  }
  
  return (

    <StyledHeader>

      <MainLogoWrapper>
        <NavLink to='/'><MainLogo src={hagLogo} alt='hag Logo' /></NavLink>
        <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1>
      </MainLogoWrapper>

      <Burger open={burgerOpen} setOpen={handleClick} />

      <SyledNav burgerOpen={burgerOpen}>
        <NavLink to='/development' aria-label='Development' onClick={handleClick}><p>Development</p></NavLink>
        <NavLink to='/webdesign' aria-label='Webdesigns' onClick={handleClick}><p>Webdesign</p></NavLink>
        <NavLink to='/info' aria-label='Info' onClick={handleClick}><p>Info</p></NavLink>
      </SyledNav>

    </StyledHeader>
  )
}

export default Header
