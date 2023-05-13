import './bodyinfo.scss'
import '../../fonts/fonts-scss/fonts.scss'

import onLoaded from '../../slice/loadingSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getWeather } from '../../services/getWeather'
import React, { useState, useEffect } from "react";
import Spinner from '../spinner/spinner';

function BodyInfo() {
  const loaded = useSelector((state) => state.loading.loadingValue);
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputValue);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    getWeather(inputValue).then(({ current, location }) => {
      setWeatherData(current);
      setLocationData(location);
      dispatch(onLoaded());
    });
  }, [inputValue, dispatch]);

  if (!weatherData || !locationData) {
    return <Spinner/>;
  }

  function chekIfLoaded() {
    if(!loaded) {
      return <Spinner/>
    } else {
      return (
          <div className="info_city">
            <p>{locationData.name}</p>
            <p className="date_time_info">{weatherData.last_updated}</p>
          </div>
      )
    }
  }

  return (
    <div className="info_wrap">

      <h1 className="title">The.Weather</h1>
      
      <div className="background_info">
        <h1 className="temp">{weatherData.temp_c}°</h1>
        {chekIfLoaded()}
      </div>
    </div>
  );
}

export default BodyInfo;