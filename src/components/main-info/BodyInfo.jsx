import './bodyinfo.scss'
import '../../fonts/fonts-scss/fonts.scss'
import cloudy from './partly-cloudy-day.svg'

import { getWeather } from '../../services/getWeather'
import React, { useState, useEffect } from "react";

function BodyInfo () {
    
  const [dayWeather, setDayWeather] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeather().then(({ dayWeather }) => {
      setDayWeather(dayWeather);
    });
  }, []);

  useEffect(() => {
    if (dayWeather) {
      dayWeather.then((data) => {
        setWeatherData(data);
      });
    }
  }, [dayWeather]);

  if (!weatherData.current) {
    return <div>Loading...</div>;
  }

  

    const { location, current } = weatherData;

    

    return (
        <div className='info_wrap'>
            <h1 className='title'>The.Weather</h1>
            <div className='background_info'>
                <h1 className='temp'>{current.temp_c}°</h1>
                <div className='info_city'>
                    <p>{location.name}</p>
                    <p className='date_time_info'>{current.last_updated}</p>
                </div>
                <img src={current.condition.icon} alt={current.condition.text} />
            </div>
        </div>   
    )
}

export default BodyInfo;