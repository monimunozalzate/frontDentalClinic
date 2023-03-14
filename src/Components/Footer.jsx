import React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e3f2fd",
        padding: "0.5rem 1rem",
      }}
      component="footer"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Powered by Monica Munoz 2022</p>
        {/* <img src="./images/DH.png" alt="DH-logo" style={{ height: "2rem" }} /> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "2rem",
          height: "2rem",
          paddingRight: '11rem'
        }}
      >
        <IconButton>
          <img src="/images/ico-facebook.png" alt="iconoFacebook" style={{ width: "1.5rem",
          height: "1.5rem",}}/>
        </IconButton>
        <IconButton>
          <img src="/images/ico-instagram.png" alt="iconoInstagram" style={{ width: "1.5rem",
          height: "1.5rem",}} />
        </IconButton>
        <IconButton>
          <img src="/images/ico-tiktok.png" alt="iconoTiktok" style={{width: "1.5rem",
          height: "1.5rem"}}/>
        </IconButton>
        <IconButton>
          <img src="/images/ico-whatsapp.png" alt="iconoWhatsapp" style={{ width: "1.5rem",
          height: "1.5rem"}}/>
        </IconButton>
      </div>
    </Box>
  );
};

export default Footer;
