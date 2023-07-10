import React from "react";
import "./css/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__left">
          <span className="navbar__wrapper__left__languaje">ES</span>
          <div className="navbar__wrapper__left__searchContainer">
            <input
              type="text"
              className="navbar__wrapper__left__searchContainer__input"
            />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="navbar__wrapper__center">
          <h1 className="navbar__wrapper__center__logo">
            <a href="/">E-Shop</a>
          </h1>
        </div>
        <div className="navbar__wrapper__right">
          <div className="navbar__wrapper__right__menuItem">
            <a href="/register">REGISTRARSE</a>
          </div>
          <div className="navbar__wrapper__right__menuItem">
            <a href="/login">INGRESAR</a>
          </div>
          <div className="navbar__wrapper__right__menuItem">
            <a href="/cart">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
