import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, defaultClothingItems } from "../../utils/constants";
import Footer from "../Footer/Footer";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import ProfileMobileModal from "../ProfileMobileModal/ProfileMobileModal";

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

  const handleMobileProfileClick = () => {
    setActiveModal("profile");
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
          <Header
            weatherData={weatherData}
            handleAddClick={handleAddClick}
            onMobileProfileClick={handleMobileProfileClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleCardClick={handleCardClick}
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile clothingItems={clothingItems} handleCardClick={handleCardClick} />}
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          handleClose={handleClose}
          handleAddItem={handleAddItem}
        />
        <ItemModal isOpen={activeModal === "preview"} card={selectedCard} handleClose={handleClose} />
        <ProfileMobileModal
          isOpen={activeModal === "profile"}
          handleClose={handleClose}
          onAddClick={handleAddClick}
        />
      </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
