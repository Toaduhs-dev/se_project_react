import { useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">
        Toady is Rainy with at 36 degrees F / You may want to wear:
      </p>
      {clothingItems.map((item) => {
        return <ItemCard data={item} />;
      })}
    </main>
  );
}

export default Main;
