import './weather.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'


import WeatherInfo from '../weather-info/Info'
import Search from '../search/Search'



import { getWeather } from '../../services/getWeather'
import { useState } from 'react'
import { useEffect } from 'react'

function WeatherMain () {
  
  let [forecast, setForecast] = useState(null);
  const [weatherData, setWeatherData] = useState({ forecastData: [] });

  useEffect(() => {
    getWeather().then(({ forecast }) => {
      setForecast(forecast);
    });
  }, []);

  useEffect(() => {
    if (forecast && forecast.forecastday) {
      setWeatherData({ forecastData: forecast.forecastday });
    }
  }, [forecast]);

  if (!weatherData.forecastData.length) {
    return <div>Loading...</div>;
  }

    return (
        <div className='weather_i_wrap'>
            <div className='weather_i_bg'>
                <div className='content_wrap'>
                    <Search/>
                    <div className='weather_info'>
                        <h1>Weather info</h1>
                        <WeatherInfo/>
                    </div>
                    <div className='line'/>
                    <div className='week_weather'>
                          {forecast && forecast.forecastday && forecast.forecastday.map((day) => {
                            return (
                              <div className='week_el'> 
                                  <p >Monday</p>
                                  <img src={rain} alt="rain" className='wind_img'/>
                                  <p className='elem_numb'>{day.day.maxtemp_c}°/<span className='alt_number'>{day.day.mintemp_c}°</span></p>
                              </div> 
                            ); 
                          })}
                    </div>
                    <div className='line'/>
                    
                </div>
            </div>
        </div>
    )
}

export default WeatherMain;