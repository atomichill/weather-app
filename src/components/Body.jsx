import './body.scss'
import '../fonts/fonts-scss/fonts.scss'

import Modal from './modal/Modal';
import BodyInfo from './main-info/BodyInfo';
import WeatherMain from './weather-main/WeatherMain';
import { getWeather } from '../services/getWeather';
import { useEffect, useState} from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onLoaded } from '../slice/loadingSlice';

function Body() {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.input.inputValue);
    const [weatherData, setWeatherData] = useState(null);
    const [render, setRender] = useState(false);
    const modal = useSelector((state) => state.counter.modal);
  
    useEffect(() => {
      getWeather(inputValue).then(({ current }) => {
        setWeatherData(current);
        dispatch(onLoaded());
      });
    }, [inputValue, dispatch]);
  
    function chekDay () {
        const day = 'background_img_day'
        const night = 'background_img_night'
        if(weatherData && weatherData.is_day === 1 ) {
          return day
        } else {
          return night
        }
      }
  
    function chekRender() {
      setRender((prevRender) => !prevRender);
      
    }
  
    const clicked = () => {
      if (render === true ) {
        return (
          <div className="info_container weather_main">
            
              <WeatherMain className={render ? 'roll-in' : ''}/>
            
          </div>
        );
      } else {
        return null;
      }
    };
  
    const chekModalStatus = () => {
      if (modal === true) {
        return <Modal/>;
      }
    };
  
    return (
      <div className="body_wrap">
        <div className={chekDay()}>
          {chekModalStatus()}
          <BodyInfo />
          <div className="btn_clck" onClick={chekRender} />
          {clicked()};
        </div>
      </div>
    );
  }
  
  export default Body;