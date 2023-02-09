import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/pic32x32.png";
const NavBar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-brand" href="#" style={{ width: "5%" }}>
        <AccountCircleIcon sx={{ fontSize: "40px" }} />
      </div>
      <h3
        style={{
          textAlign: "left",
          color: "#E29FF6",
          fontWeight: "700",
          letterSpacing: "5px",
          fontSize: "30px",
          margin: "12px",
        }}
      >
        YouTube
        <small class="text-muted">NotePad</small>
      </h3>
      <div class="navbar-brand" href="#" style={{ width: "5%" }}>
        <img src={logo} style={{ height: "40px" }} />
      </div>
    </nav>
  );
};

export default NavBar;
