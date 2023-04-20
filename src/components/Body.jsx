import './body.scss'
import '../fonts/fonts-scss/fonts.scss'

import BodyInfo from './main-info/BodyInfo';
import WeatherMain from './weather-main/WeatherMain';

function Body () {
    return (
        <div className="body_wrap">
            <div className="background_img_day">
                <BodyInfo/>
                <div className='info_container'>
                    <WeatherMain/>
                </div>
                
            </div>
        </div>
    )
}

export default Body;