import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lon=${coords.longitude}&lat=${coords.latitude}`).then(({ data }) => {
          if (isSubscribed) {
            console.log(data)
            setWeather(data);
          };
        });
      });
    };
    return () => isSubscribed = false
  }, []);


  return (
    <>
      <h1>Hola Mundo: {JSON.stringify(weather)}</h1>
    </>
  )
};

export default App;