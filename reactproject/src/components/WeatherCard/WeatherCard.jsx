import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../components/utils/constant";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // Destructure safely
  const { temperature, day = true, condition = "clear" } = weatherData || {};

  // Extract the correct temperature value based on current unit (F or C)
  const tempValue =
    temperature &&
    typeof temperature === "object" &&
    temperature[currentTemperatureUnit] !== undefined
      ? temperature[currentTemperatureUnit]
      : 0;

  // Find matching weather background image
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === day &&
      option.condition.toLowerCase() === condition.toLowerCase()
    );
  });

  // Fallback to default day/night image
  const fallbackOption = defaultWeatherOptions[day ? "day" : "night"];
  const weatherOptionUrl = weatherOption?.url || fallbackOption.url;

  return (
    <section className="weather-card">
      <div className="weather-card__info">
        {tempValue}°{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        alt={`Weather background showing ${
          day ? "day" : "night"
        }time ${condition} conditions`}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;
