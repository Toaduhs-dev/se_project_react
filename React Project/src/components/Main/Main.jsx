import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
const Main = ({ clothingItems, onCardClick }) => (
  <main className="main">
    <WeatherCard />
    <section className="main__clothes">
      <p className="main__description">
        Today is 75 °F and it is cloudy / You may want to wear:
      </p>
      <ul className="main__items">
        {clothingItems.map((card) => (
          <ItemCard key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  </main>
);
export default Main;
