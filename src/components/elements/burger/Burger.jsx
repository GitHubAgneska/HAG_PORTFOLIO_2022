import { StyledBurger } from './Buger_style'


const Burger = ({ open, setOpen }) => {

  return (

    <StyledBurger open={open} onClick={setOpen}>
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
