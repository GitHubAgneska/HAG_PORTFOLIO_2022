import { StyledBurger } from "./Buger_style"


const Burger = ({ open, setOpen }) => {

    return (

        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            { open? 
                <i class="fas fa-times" id="closeNavIcon"></i>
                :<i class="fas fa-bars" id="burgerIcon" ></i>
            }
        </StyledBurger>
    )
}
export default Burger
/* Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }; */