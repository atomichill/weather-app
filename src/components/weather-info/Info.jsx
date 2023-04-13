import './info.scss'

import wind from './wind.svg'
import cloudy from './cloudy.svg'
import humidity from './humidity.svg'



function WeatherInfo () {
    return (
        <div>
            <div className='weather_i_container'>
                <div>
                    <p>Clody</p>
                    <p>Humidity</p>
                    <p>Wind</p>
                </div>
                <div className='img_wrap'>
                    <img src={cloudy} alt="cloudy" className='wind_img'/>
                    <img src={humidity} alt="humidity" className='wind_img'/>
                    <img src={wind} alt="windicon" className='wind_img'/>
                </div>
                <div>
                    <p>86%</p>
                    <p>62%</p>
                    <p>8km/h</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;