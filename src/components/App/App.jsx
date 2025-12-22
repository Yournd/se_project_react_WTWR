import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, defaultClothingItems } from "../../utils/constants";
import Footer from "../Footer/Footer";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleAddItem = (data) => {
    const newCardData = {
      name: data.name,
      link: data.link,
      weather: data.weather,
    };
    setClothingItems([...clothingItems, newCardData]);
    handleClose();
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
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
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          handleClose={handleClose}
          handleAddItem={handleAddItem}
        />
        <ItemModal isOpen={activeModal === "preview"} card={selectedCard} handleClose={handleClose} />
      </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
