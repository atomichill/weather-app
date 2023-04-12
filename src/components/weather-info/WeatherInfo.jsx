import './weather.scss'
import '../../fonts.scss'

import wind from './wind.svg'

function WeatherInfo () {
    return (
        <div className='weather_i_wrap'>
            <div className='weather_i_bg'>
                <div className='content_wrap'>
                    <div className='weather_search'>
                        <form action="">
                            <input type="search" className='search'/>
                            <button type='submit' className='btn'> search </button>
                        </form>
                    </div>
                    <div className='weather_info'>
                        <h1>Weather info</h1>
                        <div className='weather_i_container'>
                            <div>
                                <p>Clody</p>
                                <p>Humidity</p>
                                <p>Wind</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src={wind} alt="wind" />
                            </div>
                            <div>
                                <p>86%</p>
                                <p>62%</p>
                                <p>8km/h</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;