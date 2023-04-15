import './weather.scss'
import '../../fonts/fonts-scss/fonts.scss'


import WeatherInfo from '../weather-info/Info'
import Search from '../search/Search'
import Week from '../weather-week/Week'
import Hourly from '../hourly-info/Hourly'

function WeatherMain () {
    return (
        <div className='weather_i_wrap'>
            <div className='weather_i_bg'>
                <div className='content_wrap'>
                    <Search/>
                    <div className='weather_info'>
                        <h1>Weather info</h1>
                        <WeatherInfo/>
                    </div>
                    <div className='line'/>
                    <div className='week_weather'>
                        <Week/>
                        <Week/>
                        <Week/>
                        <Week/>
                        <Week/>
                        <Week/>
                        <Week/>
                    </div>
                    <div className='line'/>
                    <div className='hourly'>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                        <Hourly/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain;