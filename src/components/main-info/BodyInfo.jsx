import './bodyinfo.scss'
import '../../fonts.scss'
import cloudy from './partly-cloudy-day.svg'

function BodyInfo () {
    return (
        <div className='info_wrap'>
            <h1 className='title'>The.Weather</h1>
            <div className='background_info'>
                <h1 className='temp'>45</h1>
                <div className='info_city'>
                        <p>London</p>
                    <p className='date_time_info'>06:05 - monday ,9 sep'18</p>
                </div>
                <img src={cloudy} alt="cloudy" />
            </div>
        </div>   
    )
}

export default BodyInfo; 