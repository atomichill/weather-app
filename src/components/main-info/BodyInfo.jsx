import './bodyinfo.scss'
import '../../fonts/fonts-scss/fonts.scss'

import { useSelector } from 'react-redux';
import { getWeather } from '../../services/getWeather'
import React, { useState, useEffect } from "react";

function BodyInfo () {
  const city = useSelector((state) => state.input.inputSlice)
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    getWeather(city).then(({ current }) => {
      setWeatherData(current);
    });
  }, []);

  useEffect(() => {
    getWeather(city).then(({ location }) => {
      setLocationData(location);
    });
  }, []);

  if (!weatherData && !locationData) {
    return <div>Loading...</div>;
  }
    return (
        <div className='info_wrap'>
            <h1 className='title'>The.Weather</h1>
            <div className='background_info'>
                <h1 className='temp'>{weatherData.temp_c}°</h1>
                <div className='info_city'>
                    <p>{locationData.name}</p>
                    <p className='date_time_info'>{weatherData.last_updated}</p>
                </div>
            </div>
        </div>   
    )
}

export default BodyInfo;