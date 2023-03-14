import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ContextGlobal } from "./utils/global.context";

const Hamburger = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          right: " 0%",
          padding: "1rem",
          width: "7rem",
          top: "10%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "#e3f2fd",
        }}
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
    </div>
  );
};

export default Hamburger;
