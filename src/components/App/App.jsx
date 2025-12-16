import { useEffect, useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates } from '../../utils/constants';
import Footer from '../Footer/Footer';

function App() {
  const APIkey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    condition: "",
    isDay: false
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const handleAddClick = () => {
    setActiveModal("add-garment");
  }

  const handleClose = () => {
    setActiveModal("");
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filteredData = filterWeatherData(data);
      setWeatherData(filteredData);
    })
    .catch(console.error)
  }, [])

  return (
   <div className='app'>
    <div className="page__content">
      <Header weatherData={weatherData} handleAddClick={handleAddClick}/>
      <Main handleCardClick={handleCardClick} weatherData={weatherData}/>
      <Footer />
    </div>
    <ModalWithForm
    buttonText="Add garment"
    title="New garment"
    activeModal={activeModal}
    handleClose={handleClose}>
      <label htmlFor="name" className="modal__label">
        Name <input type="text" className="modal__input" id="name" placeholder="Name"/>
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image <input type="url" className="modal__input" id="imageUrl" placeholder="Image URL"/>
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input type="radio" id="hot" className="modal__radio-input" /> Hot
          </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input type="radio" id="warm" className="modal__radio-input" /> Warm
          </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input type="radio" id="cold" className="modal__radio-input" /> Cold
          </label>
      </fieldset>
    </ModalWithForm>
    <ItemModal activeModal={activeModal} card={selectedCard} handleClose={handleClose}/>
   </div>
  )
}

export default App
