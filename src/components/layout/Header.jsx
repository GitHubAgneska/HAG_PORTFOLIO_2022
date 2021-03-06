import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { StyledHeader, MainLogoWrapper, MainLogo } from './Header_style'
import { SrOnlyH1 } from '../../style/global_style'
import hagLogo from '../../assets/logos/HAG_logo_darkBG_full.png'
import NavComponent from '../layout/Nav/Nav'


const Header = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === 'home'

  return (

      <StyledHeader>

        <MainLogoWrapper>
          <NavLink to='/'><MainLogo src={hagLogo} alt='hag Logo' /></NavLink>
          <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1>
        </MainLogoWrapper>
        
        { !isHomePage &&  <NavComponent /> }

      </StyledHeader>
    )
}

export default Header
