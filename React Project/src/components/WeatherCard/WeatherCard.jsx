import { useState } from "react";
import cloudy from "../.././assets/Day/clouds.png";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy Weather" className="weather-card__image" />
      <p className="weather-card__temp">55 &deg; F </p>
    </section>
  );
}

export default WeatherCard;
