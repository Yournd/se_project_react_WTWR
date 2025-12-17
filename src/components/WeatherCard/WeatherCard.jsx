import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
const weatherOption = weatherOptions.filter((item) => {
  return (item.day === weatherData.isDay && item.condition === weatherData.condition);
})

let filteredOption;
if (weatherOption.length === 0) {
  filteredOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
}else {
  filteredOption = weatherOption[0];
}

  return (
  <section className="weather-card">
    <p className="weather-card__temp">{weatherData.temp.F}&deg;</p>
    <img src={filteredOption?.url} alt={`Card Showing: ${filteredOption?.day ? "day" : "night"} time with ${filteredOption?.condition}`} className="weather-card__image" />
  </section>
)
}

export default WeatherCard;