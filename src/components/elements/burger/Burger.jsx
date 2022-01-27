import { StyledBurger } from './Buger_style'


const Burger = ({ open, setOpen, hostParent }) => {

  return (

    <StyledBurger hostParent={hostParent} open={open} onClick={setOpen}>
      {open
        ? <i className='fas fa-times' id='closeNavIcon' />
        : <i className='fas fa-bars' id='burgerIcon' />}
    </StyledBurger>
  )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */
