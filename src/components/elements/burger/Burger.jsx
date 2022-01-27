import { StyledBurger } from './Buger_style'
import { Link } from 'react-router-dom';

const Burger = ({ open, setOpen, hostParent }) => {

  const navigateHome = () => { }
  return (

    <StyledBurger hostParent={hostParent} open={open} onClick={setOpen}>
      {open
        ? <i className='fas fa-times' id='closeNavIcon' />
        : <Link to='/'><i className='fas fa-bars' id='burgerIcon' onClick={navigateHome}/></Link>}
    </StyledBurger>
  )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */
