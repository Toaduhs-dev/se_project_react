import { useContext } from "react";

import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../components/utils/constant";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { temperature, day, condition } = weatherData;
  console.log(temperature);
  const weatherOption = weatherOptions.filter((option) => {
    return option.day === day && option.condition === condition;
  });

  const weatherOptionUrl =
    weatherOption[0]?.url || defaultWeatherOptions[day ? "day" : "night"].url;

  return (
    <section className="weather-card">
      <div className="weather-card__info">
        {temperature[currentTemperatureUnit]}°{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${day}time ${condition} weather`}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;
