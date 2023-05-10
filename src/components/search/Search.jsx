import './search.scss'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputSearch } from '../../slice/inputSlice';
import '../../fonts/fonts-scss/fonts.scss'

function Search() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
      dispatch(inputSearch(inputValue));
    };
  
    return (
      <div className="weather_search">
        <label>
          <input
            type="text"
            className="search"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search City"
          />
        </label>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
  
  export default Search;