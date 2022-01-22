import { StyledBurger } from "./Buger_style"
// import {lockScroll} from '../../../utils/lockOnScroll'

const Burger = ({ open, setOpen }) => {

    const handleClick = () => { 
        setOpen(!open)
        !open? document.body.style = "position:fixed": document.body.style = "position:initial"
    }
    return (

        <StyledBurger open={open} onClick={handleClick}>
            { open? 
                <i className="fas fa-times" id="closeNavIcon"></i>
                :<i className="fas fa-bars" id="burgerIcon" ></i>
            }
        </StyledBurger>
    )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */