import './week.scss'
import rain from './rain.svg'

function Week () {
    return (
        <div className='week_el'> 
            <p className='week_day'>Monday</p>
            <img src={rain} alt="rain" className='wind_img'/>
            <p className='elem_numb'>89°/<span className='alt_number'>48°</span></p>
        </div>
    )
}

export default Week;