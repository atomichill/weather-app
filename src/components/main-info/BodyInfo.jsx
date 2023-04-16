import './bodyinfo.scss'
import '../../fonts/fonts-scss/fonts.scss'
import cloudy from './partly-cloudy-day.svg'

import { getWeather } from '../../services/getWeather'

function BodyInfo () {
    
    const {location , current} = getWeather();
    
     console.log(location)
     console.log(current);

    return (
        <div className='info_wrap'>
            <h1 className='title'>The.Weather</h1>
            <div className='background_info'>
                <h1 className='temp'>45</h1>
                <div className='info_city'>
                        <p>{name}</p>
                    <p className='date_time_info'>06:05 - monday ,9 sep'18</p>
                </div>
                <img src={cloudy} alt="cloudy" />
            </div>
        </div>   
    )
}

export default BodyInfo; 