import { useState } from "react";
import logo from "../../assets/HeaderItems/Logo.png";
import avatar from "../../assets/HeaderItems/avatarheader.svg";
import "./Header.css";

function Header({ handelOpenAddGarmentModal }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img src={logo} alt="WTWR Logo" className="header__logo" />
      <p className="header__place">
        <time className="header__datetime" dateTime="{now}">
          {dateStr}
        </time>
        , Seattle
      </p>
      <button
        onClick={handelOpenAddGarmentModal}
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <p className="header__username">Daneil K.</p>
      <img src={avatar} alt="Terrence Tegenge" className="header__avatar" />
    </header>
  );
}

export default Header;
