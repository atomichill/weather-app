import './weather.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'
import rain from '../weather-week/rain.svg'
import WeatherInfo from '../weather-info/Info';
import Search from '../search/Search';
import { getWeather } from '../../services/getWeather'
import { useState, useEffect } from 'react'

function WeatherMain() {
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
                <p>{day.date}</p>
                <img src={rain} alt="rain" className='wind_img'/>
                <p className='elem_numb'>{day.day.maxtemp_c}°/<span className='alt_number'>{day.day.mintemp_c}°</span></p>
              </div>
            ))}
          </div>
          <div className='line' />
        </div>
      </div>
    </div>
  );
}

export default WeatherMain;