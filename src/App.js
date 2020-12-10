import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcons from './components/weatherIcons';

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API}`).then(({ data }) => {
          if (isSubscribed) {
            setWeather(data);
          };
        });
      });
    };
    return () => isSubscribed = false
  }, []);

  const timezone = new Date().toLocaleTimeString();

  return (
    !weather ? <p>Loading...</p> :
      <>
        <h1>{timezone}</h1>
        <WeatherIcons weather={weather.weather[0].main} />
        <p>{(weather.main.temp - 273.15).toFixed(2)} °C</p>
        <p>{weather.weather[0].main}</p>
        <p>{weather.name}</p>
      </>
  )
};

export default App;