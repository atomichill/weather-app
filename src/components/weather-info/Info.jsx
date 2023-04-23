import './info.scss'
import '../../fonts/fonts-scss/fonts.scss'

import wind from './wind.svg'
import cloudy from './cloudy.svg'
import humidity from './humidity.svg'
import React, { useState, useEffect } from "react";
import { getWeather } from '../../services/getWeather'


function WeatherInfo () {
    console.log(getWeather());
    const [dayWeather, setDayWeather] = useState(null);
    const [weatherData, setWeatherData] = useState({});
  
    useEffect(() => {
      getWeather().then(({dayWeather}) => {
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
    
    const { current } = weatherData;
    

    return (
        <div>
            <div className='weather_i_container'>
                <div>
                    <p>Clody</p>
                    <p>Humidity</p>
                    <p>Wind</p>
                </div>
                <div className='img_wrap'>
                    <img src={cloudy} alt="cloudy" className='wind_img'/>
                    <img src={humidity} alt="humidity" className='wind_img'/>
                    <img src={wind} alt="windicon" className='wind_img'/>
                </div>
                <div>
                    <p>{current.cloud}%</p>
                    <p>{current.humidity}%</p>
                    <p>{current.wind_kph}km/h</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;