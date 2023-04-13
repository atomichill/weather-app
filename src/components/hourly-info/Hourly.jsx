import './hourly.scss'

import windy from './partly-cloudy-night-rain.svg'

function Hourly () {
    return (
        <div className='hourly_el'>
            <p>10:30</p>
            <img src={windy} alt="windy" className='hourly_img'/>
            <p>Windy</p>
            <p>48°</p>
        </div>
    )
}

export default Hourly;