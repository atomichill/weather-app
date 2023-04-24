import './body.scss'
import '../fonts/fonts-scss/fonts.scss'

import BodyInfo from './main-info/BodyInfo';
import WeatherMain from './weather-main/WeatherMain';
import { getWeather } from '../services/getWeather';
import { useEffect, useState } from 'react';

function Body () {
    const [weatherData, setWeatherData] = useState(null);
    
    useEffect(() => {
        getWeather().then(({ current }) => {
        setWeatherData(current);
        });
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    function chekDay () {
        const day = 'background_img_day'
        const night = 'background_img_night'
        if(weatherData.is_day === 1 ) {
            return day
        } else {
            return night
        }
    }
    
    return (
        <div className="body_wrap">
            <div className={chekDay()}>
                <BodyInfo/>
                <div className='info_container'>
                    <WeatherMain/>
                </div>
            </div>
        </div>
    )
}

export default Body;