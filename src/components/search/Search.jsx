import './search.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputSearch } from '../../slice/inputSlice';
import '../../fonts/fonts-scss/fonts.scss'

function Search () {
    const [inputValue, setInputValue] = useState('');
    
    const dispatch = useDispatch()

    function useInputValue (event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(inputSearch(inputValue));
      }

    return (
        <div className='weather_search'>
            <label>
                <input type="search" className='search' value={inputValue}onChange={useInputValue} placeholder='Search City'/> 
            </label>
            <button type="submit" className='btn'>Submit</button>
        </div>
    )
}

export default Search;