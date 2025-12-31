import { useEffect, useState } from "react";
import "./App.css";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import { defaultClothingItems } from "../utils/clothingItems";

import { apiKey, location } from "../utils/constant";
import {
  filterDataFromWeatherAPI,
  getForecastWeather,
} from "../utils/weatherApi";

const App = () => {
  // The initial state of state variables contains the correct data type.
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 999, C: 999 },
    day: true,
    condition: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // The App component makes an API request for the weather data (only once — on mounting).
  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, apiKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherAPI(data));
        })
        .catch(console.error);
    }
  }, []);

  // The escape listener implementation is optional
  useEffect(() => {
    // If no active modal, don't use the listener
    if (!activeModal) return;

    const handleEscClose = (e) => {
      // Define function inside useEffect to keep the reference on rerender
      if (e.key === "Escape") {
        closeAllModals();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // Cleanup by removing listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  // The escape listener implementation is optional

  // The App component saves default clothing items in the state.
  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  // The App component includes Header, Main, Footer, ModalWithForm, and ItemModal components.
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__wrapper">
          <Header
            weatherData={weatherData}
            handleAddClick={() => setActiveModal("create")}
          />
          <Main
            weatherData={weatherData}
            cards={clothingItems}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <ModalWithForm
          title="New garment"
          name="new-card"
          onClose={closeAllModals}
          isOpen={activeModal === "create"}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              id="clothing-name"
              className="modal__input modal__input_type_card-name"
              placeholder="Name"
              required
              minLength="1"
              maxLength="30"
            />
            <span className="modal__error" id="place-name-error" />
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              name="link"
              id="clothing-link"
              className="modal__input modal__input_type_url"
              placeholder="Image URL"
              required
            />
            <span className="modal__error" id="place-link-error" />
          </label>
          <fieldset className="modal__fieldset modal__fieldset_type_radio">
            <legend className="modal__legend">Select the weather type:</legend>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="choiceHot"
                name="weatherType"
                value="hot"
              />
              <label className="modal__label_type_radio" htmlFor="choiceHot">
                Hot
              </label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="choiceWarm"
                name="weatherType"
                value="warm"
              />
              <label className="modal__label_type_radio" htmlFor="choiceWarm">
                Warm
              </label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="choiceCold"
                name="weatherType"
                value="cold"
              />
              <label className="modal__label_type_radio" htmlFor="choiceCold">
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          card={selectedCard || {}}
          onClose={closeAllModals}
          activeModal={activeModal}
          isOpen={activeModal === "preview"}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
