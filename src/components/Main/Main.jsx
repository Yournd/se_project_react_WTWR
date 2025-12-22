import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function Main({ handleCardClick, weatherData, clothingItems }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  const visibleItems = weatherData.type
    ? clothingItems.filter((item) => item.weather === weatherData.type)
    : clothingItems;
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit}/ You may want to wear:
        </p>
      </section>
      <ul className="cards__list">
        {visibleItems.map((item) => {
          return <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
