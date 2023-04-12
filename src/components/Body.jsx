import './body.scss'

import BodyInfo from './main-info/BodyInfo';
import WeatherInfo from './weather-info/WeatherInfo';

function Body () {
    return (
        <div className="body_wrap">
            <div className="background_img">
                <BodyInfo/>
                <WeatherInfo/>
            </div>
        </div>
    )
}

export default Body;