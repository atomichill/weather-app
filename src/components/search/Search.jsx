import './search.scss'

import '../../fonts/fonts-scss/fonts.scss'

function Search () {
    return (
        <div className='weather_search'>
            <form action="">
                <input type="search" className='search'/>
                <button type='submit' className='btn'> search </button>
            </form>
        </div>
    )
}

export default Search;