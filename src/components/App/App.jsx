import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, defaultClothingItems } from "../../utils/constants";
import Footer from "../Footer/Footer";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? "C" : "F";
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleClose = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTempUnitContext.Provider value={{ currentTempUnit, handleToggleSwitchChange }}>
      <div className="app">
        <div className="page__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />
          <Main handleCardClick={handleCardClick} weatherData={weatherData} clothingItems={clothingItems} />
          <Footer />
        </div>
        <ModalWithForm
          isOpen={activeModal === "add-garment"}
          name={activeModal}
          buttonText="Add garment"
          title="New garment"
          handleClose={handleClose}
        >
          <label htmlFor="name" className="modal__label">
            Name <input type="text" className="modal__input" id="name" placeholder="Name" required />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image <input type="url" className="modal__input" id="imageUrl" placeholder="Image URL" required />
          </label>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>

            <label htmlFor="hot" className="modal__label modal__label_type_radio">
              <input value="hot" name="weather" type="radio" id="hot" className="modal__radio-input" /> Hot
            </label>

            <label htmlFor="warm" className="modal__label modal__label_type_radio">
              <input value="warm" name="weather" type="radio" id="warm" className="modal__radio-input" /> Warm
            </label>

            <label htmlFor="cold" className="modal__label modal__label_type_radio">
              <input
                value="cold"
                name="weather"
                type="radio"
                id="cold"
                className="modal__radio-input"
                required
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal isOpen={activeModal === "preview"} card={selectedCard} handleClose={handleClose} />
      </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
