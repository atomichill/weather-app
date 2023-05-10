import './bodyinfo.scss'
import '../../fonts/fonts-scss/fonts.scss'

import { useSelector } from 'react-redux';
import { getWeather } from '../../services/getWeather'
import React, { useState, useEffect } from "react";

function BodyInfo() {
  const inputValue = useSelector((state) => state.input.inputValue);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    getWeather(inputValue).then(({ current, location }) => {
      setWeatherData(current);
      setLocationData(location);
    });
  }, [inputValue]);

  if (!weatherData || !locationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="info_wrap">
      <h1 className="title">The.Weather</h1>
      <div className="background_info">
        <h1 className="temp">{weatherData.temp_c}°</h1>
        <div className="info_city">
          <p>{locationData.name}</p>
          <p className="date_time_info">{weatherData.last_updated}</p>
        </div>
      </div>
    </div>
  );
}

export default BodyInfo;