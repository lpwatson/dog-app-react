import { ReactElement } from "react";
import { Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";



const NavBar = (): ReactElement => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  }

  const onClickFavourites = () => {
    navigate("/favourites");
  }

  return (
    <Toolbar>
      <Button sx={{ color: "orange" }} onClick={() => onClickHome()}>Home</Button>
      <Button sx={{ color: "orange" }} onClick={() => onClickFavourites()}>Favourites</Button>
    </Toolbar>
  )
}

export default NavBar;
