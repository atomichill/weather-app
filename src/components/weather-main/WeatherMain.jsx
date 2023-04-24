import './weather.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'

import WeatherInfo from '../weather-info/Info';
import Search from '../search/Search';
import Hourly from '../hourly-info/Hourly'
import { getWeather } from '../../services/getWeather'
import { useState, useEffect } from 'react'

function WeatherMain() {
  console.log(getWeather());
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getWeather().then(data => {
      setForecastData(data.forecast.forecastday);
    });
  }, []);

   

  if (!forecastData || forecastData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='weather_i_wrap'>
      <div className='weather_i_bg'>
        <div className='content_wrap'>
          <Search />
          <div className='weather_info'>
            <h1>Weather info</h1>
            <WeatherInfo />
          </div>
          <div className='line' />
          <div className='week_weather'>
            {forecastData.map((day) => (
              <div className='week_el' key={day.date_epoch}>
                <p className='elem_date'>{day.date}</p>
                <img src={day.day.condition.icon} alt="rain" className='wind_img'/>
                <p className='elem_numb'>{day.day.maxtemp_c}°/<span className='alt_number'>{day.day.mintemp_c}°</span></p>
              </div>
            ))}
          </div>
          <div className='line' />
          <div className='hourly_wrap'>
            {
              forecastData.map((day) => (
                <div className='hourly_el'>
                  <p>{day.hour.time}</p>
                  
                  <p>Windy</p>
                  <p>48°</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherMain;