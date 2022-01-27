import React, { Fragment, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { StyledNav } from './Nav_style'
import Burger from '../../elements/burger/Burger'

const NavComponent = ({ hostParent }) => {

    const [burgerOpen, setBurgerOpen] = useState(false)
    const handleClick = () => {
        setBurgerOpen(!burgerOpen)
      /* !burgerOpen ? document.body.style = 'position:fixed' : document.body.style = 'position:initial' */
    }

    
    return (
        <Fragment>

            <Burger open={burgerOpen} hostParent={hostParent} setOpen={handleClick} />

            <StyledNav burgerOpen={burgerOpen} hostParent={hostParent} >
                <NavLink to='/development' aria-label='Development' onClick={handleClick}><p>Development</p></NavLink>
                <NavLink to='/webdesign' aria-label='Webdesigns' onClick={handleClick}><p>Webdesign</p></NavLink>
                <NavLink to='/info' aria-label='Info' onClick={handleClick}><p>Info</p></NavLink>
            </StyledNav>

        </Fragment>
    )
}

export default NavComponent
