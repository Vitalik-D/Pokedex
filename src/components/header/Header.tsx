import React from "react";
import "./index.css";
import logo from "../img/pokeball-icon-transparent-9.jpg";
import pokemon from "../img/pngfind.com-ash-greninja-png-2124784.png";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="logo-center">
        <img src={pokemon} alt="pokemon" />{" "}
      </div>
      <div> </div>
    </div>
  );
};

export default Header;
