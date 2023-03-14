import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Hamburger from "./Hamburger";


const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
const [showHamburguer, setshowHamburguer] = useState(false)

const handleShow=(e)=>{
  e.preventDefault();
  setshowHamburguer(!showHamburguer);
}

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e3f2fd",
        padding: "1.5rem",
      }}
      component="nav"
    >
      {/* <img src="/images/DH.png" alt="DH-logo" style={{ height: "2rem" }} /> */}

      <Typography variant="h5">CLINICA ODONTOLOGICA</Typography>

      <MenuSharpIcon onClick={handleShow} />
      {showHamburguer ? <Hamburger/> : null}

      <div
      id="desktopMenu"
       
      >
        <Link to="/home">
          <h3>Home</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <Link to="/favs">
          <h3>Favs</h3>
        </Link>
        <IconButton
          onClick={() =>
            dispatch(state.bgFlag === "" ? { type: "dark" } : { type: "light" })
          }
        >
          {state.bgFlag === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
      </div>
    </Box>
  );
};

export default Navbar;
