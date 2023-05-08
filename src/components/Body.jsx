import './body.scss'
import '../fonts/fonts-scss/fonts.scss'

import Modal from './modal/Modal';
import BodyInfo from './main-info/BodyInfo';
import WeatherMain from './weather-main/WeatherMain';
import { getWeather } from '../services/getWeather';
import { useEffect, useState} from 'react';

import { useSelector } from 'react-redux';

function Body () {
    
    console.log(getWeather())
    const [weatherData, setWeatherData] = useState(null);
    const [render,setRender] = useState();
    const modal = useSelector((state) => state.counter.modal);
    

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

    function chekRender () {
        if(render === true){
            setRender(false)
        } else {
            setRender(true)
        }
        console.log(render);
    }
    
    const clicked = () => {
        if(render === true) {
            return (
                <div className='info_container'>
                    <WeatherMain/>
                </div>
            )
        }
    }

    const chekModalStatus = () => {
        if(modal === true) {
            return (
                <Modal/>
            )
        }
    }
    return (
        <div className="body_wrap">
            <div className={chekDay()}>
                {
                    chekModalStatus()
                }
                <BodyInfo/>
                <div className='btn_clck' onClick={chekRender}/>
                {
                    clicked()
                };
            </div>
        </div>
    )
}

export default Body;