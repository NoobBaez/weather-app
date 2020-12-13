import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcons from './components/weatherIcons';

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=18.5165743&lon=-69.82335499999999&appid=${process.env.REACT_APP_WEATHER_API}`).then(({ data }) => {
      if (isSubscribed) {
        setWeather(data);
      };
    });
    return () => isSubscribed = false
  }, []);

  const timezone = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });

  return !weather ? <p id="main">Loading...</p>
    : (
      <div id="main">
        <div id="time">{timezone}</div>
        <WeatherIcons weather={weather.weather[0].main} />
        <div id="grid-container">
          <div id="temperature">{Math.round(weather.main.temp - 273.15)} °C</div>
          <div className="container">
            <div id="weather">{weather.weather[0].main}</div>
            <div id="location">{weather.name}</div>
          </div>
        </div>
        <div id="credit">By Haniel Baez</div>
      </div>
    )
};

export default App;