import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#e3f2fd",
        padding: "0.5rem",
        
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
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" style={{ height: "2rem" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "2rem",
          height: "2rem",
        }}
      >
        <img src="/images/ico-facebook.png" alt="iconoFacebook" />
        <img src="/images/ico-instagram.png" alt="iconoInstagram" />
        <img src="/images/ico-tiktok.png" alt="iconoTiktok" />
        <img src="/images/ico-whatsapp.png" alt="iconoWhatsapp" />
      </div>
    </Box>
  );
};

export default Footer;
