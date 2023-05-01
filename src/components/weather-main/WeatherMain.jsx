import './weather.scss'
import '../hourly-info/hourly.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'

import { useEffect, useState } from 'react';
import { getWeather } from '../../services/getWeather';
import Search from '../search/Search';
import WeatherInfo from '../weather-info/Info'

function WeatherMain() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { current, forecast, location } = await getWeather();
        setWeatherData({ condition: current.condition.text, city: location.name, windSpeed: current.wind_kph, humidity: current.humidity });
        setForecastData(forecast.forecastday);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const evenHourTemperatures = forecastData.length > 0 ? forecastData[0].hour.filter((hourData) => new Date(hourData.time).getHours() % 2 === 0).map((hourData) => hourData.temp_c) : [];

  const selectedDayHourlyData = selectedDay ? forecastData.find((day) => day.date === selectedDay.date).hour : [];

  function CheckTime(time) {
    return time > 12 ? 'PM' : 'AM';
  }

  if (!weatherData || forecastData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather_i_wrap">
      <div className="weather_i_bg">
        <div className="content_wrap">
          <Search />
          <div className="weather_info">
            <h1>Weather info</h1>
            <WeatherInfo/>
          </div>
          <div className="line" />
          <div className="week_weather">
            {forecastData.map((day) => (
              <div className="week_el" key={day.date_epoch} onClick={() => setSelectedDay(day)}>
                <p className="elem_date">{day.date}</p>
                <img src={day.day.condition.icon} alt={day.day.condition.text} className="wind_img" />
                <p className="elem_numb">{day.day.maxtemp_c}°/<span className="alt_number">{day.day.mintemp_c}°</span></p>
              </div>
            ))}
          </div>
          <div className="line" />
          <div className='hourly_wrap'>
              {evenHourTemperatures.map((temperature, index) => {
                const selectedHourData = selectedDayHourlyData[index];
                if (!selectedHourData) {
                 return null;
                }
                const time = selectedHourData.time.split(' ')[1].slice(0, -3);
                const condition = selectedHourData.condition.text;

                return (
                  <div className='hourly_el' key={index}>
                    <p className='time'>{time}:00 {CheckTime(time)}</p>
                    <p className='condition'>{condition}</p>
                    <p className='temp'>{temperature}°</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherMain;
