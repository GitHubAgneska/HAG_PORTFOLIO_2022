import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader, MainLogoWrapper, MainLogo } from './Header_style'
import { SrOnlyH1 } from '../../style/global_style'
import hagLogo from '../../assets/logos/hag_logo_2020_small.png'
import NavComponent from '../layout/Nav/Nav'

const Header = () => {

  return (

      <StyledHeader>

        <MainLogoWrapper>
          <NavLink to='/'><MainLogo src={hagLogo} alt='hag Logo' /></NavLink>
          <SrOnlyH1>HAG portfolio webdev 2022</SrOnlyH1>
        </MainLogoWrapper>

        <NavComponent hostParent="header" />

      </StyledHeader>
    )
}

export default Header
