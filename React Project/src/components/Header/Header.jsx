import { useState } from "react";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/headeravatar.svg";
import "./Header.css";

function Header() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img src="{logo}" alt="WTWR Logo" className="header__logo" />
      <p className="header__place">
        <time className="header__datetime" datetime="{now}">
          {dateStr}
        </time>
        , New York
      </p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <p className="header__username">Daneil K.</p>
      <img src="{avatar}" alt="Terrence Tegenge" className="header__avatar" />
    </header>
  );
}

export default Header;
