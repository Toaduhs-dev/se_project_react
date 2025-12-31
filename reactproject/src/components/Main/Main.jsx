import { useContext } from "react";
import "../../components/Main/Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
const Main = ({ weatherData, cards, onCardClick }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (!weatherData) return null;
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <p className="main__description">
          Today is {weatherData.temperature[currentTemperatureUnit]}°
          {currentTemperatureUnit} / You might want to wear:
        </p>
        <ul className="main__items">
          {cards
            .filter((card) => card.weather === weatherData.type)
            .map((card) => (
              <ItemCard key={card._id} card={card} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  );
};
export default Main;
