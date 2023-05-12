import './weather.scss'
import '../hourly-info/hourly.scss'
import '../../fonts/fonts-scss/fonts.scss'
import '../weather-week/week.scss'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getWeather } from '../../services/getWeather';
import Search from '../search/Search';
import WeatherInfo from '../weather-info/Info'

function WeatherMain() {
  console.log(getWeather())
  const inputValue = useSelector((state) => state.input.inputValue);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { current, forecast, location } = await getWeather(inputValue);
        setWeatherData({ condition: current.condition.text, city: location.name, windSpeed: current.wind_kph, humidity: current.humidity });
        setForecastData(forecast.forecastday);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [inputValue]);

  const evenHourTemperatures = forecastData.reduce((acc, curr) => {
    const evenHours = curr.hour.filter((hourData) => new Date(hourData.time).getHours() % 2 === 0).map((hourData) => hourData.temp_c);
    return [...acc, ...evenHours];
  }, []);

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
            <WeatherInfo />
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
              {evenHourTemperatures.map((temp, index) => {
                const selectedHourData = selectedDayHourlyData.find((hourData) => new Date(hourData.time).getHours() === index * 2);
                if (!selectedHourData) {
                  return null;
                }
                const time = selectedHourData.time.split(' ')[1].slice(0, -3);
                const condition = selectedHourData.condition.text;
                const temp_c = selectedHourData.temp_c;

                return (
                  <div className='hourly_el' key={index}>
                    <p className='time'>{time}:00 {CheckTime(time)}</p>
                    <p className='condition'>{condition}</p>
                    <p className='temp'>{temp_c}°</p>
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