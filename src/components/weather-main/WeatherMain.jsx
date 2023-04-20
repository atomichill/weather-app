import './weather.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'


import WeatherInfo from '../weather-info/Info'
import Search from '../search/Search'

import Hourly from '../hourly-info/Hourly'

import { getWeather } from '../../services/getWeather'
import { useState } from 'react'
import { useEffect } from 'react'

function WeatherMain () {
    let [forecast, setForecast] = useState(null);
    const [weatherData, setWeatherData] = useState({});
  
    useEffect(() => {
      getWeather().then(({ forecast }) => {
        setForecast(forecast);
      });
    }, []);
  
    useEffect(() => {
      if (forecast) {
        forecast.then((data) => {
          setWeatherData(data);
        });
      }
    }, [forecast]);
  
    if (!weatherData.forecast) {
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
                        {
                            forecast.forecastday.map((day) => {
                                <div className='week_el'> 
                                    <p className='week_day'>Monday</p>
                                    <img src={rain} alt="rain" className='wind_img'/>
                                    <p className='elem_numb'>{day.day.maxtemp_c}°/<span className='alt_number'>{day.day.mintemp_c}°</span></p>
                                </div>
                            })
                        }
                    </div>
                    <div className='line'/>
                    <div className='hourly'>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain;