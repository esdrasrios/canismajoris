import React from "react";
import AppBar from "material-ui/AppBar";

const Header = () => (
  <div className="header__container">
    <div className="header__logo">
      <img src="img/logo.png" alt="logo" /> Intercâmb.io
    </div>
    <div className="header__menu">
    <i class="fas fa-info-circle"></i>
    </div>
  </div>
);

export default Header;
