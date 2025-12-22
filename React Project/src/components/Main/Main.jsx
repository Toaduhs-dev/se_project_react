import { useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">
        Toady is Cloudy with at 36 degrees F / You may want to wear:
      </p>
      <ul className="main__card-list">
        {clothingItems.map((item) => {
          console.log();
          return <ItemCard key={item._id} data={item} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
