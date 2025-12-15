import { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main'

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
   <div className='app'>
    <div className="page__content">
      <Header />
      <Main weatherData={weatherData}/>
    </div>
   </div>
  )
}

export default App
