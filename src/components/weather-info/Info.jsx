import './info.scss'
import '../../fonts/fonts-scss/fonts.scss'

import wind from './wind.svg'
import cloudy from './cloudy.svg'
import humidity from './humidity.svg'
import React, { useState, useEffect } from "react";
import { getWeather } from '../../services/getWeather'
import { useSelector } from 'react-redux'


function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const inputValue = useSelector((state) => state.input.inputValue);
  useEffect(() => {
    getWeather(inputValue).then(({ current }) => {
      setWeatherData(current);
    });
  }, [inputValue]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='weather_i_container'>
        <div>
          <p>Clody</p>
          <p>Humidity</p>
          <p>Wind</p>
        </div>
        <div className='img_wrap'>
          <img src={cloudy} alt='cloudy' className='wind_img' />
          <img src={humidity} alt='humidity' className='wind_img' />
          <img src={wind} alt='windicon' className='wind_img' />
        </div>
        <div>
          <p>{weatherData.cloud}%</p>
          <p>{weatherData.humidity}%</p>
          <p>{weatherData.wind_kph}km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;