import { useSelector, useDispatch } from 'react-redux';

import { selectSearchTerm, setSearchTerm } from '../../../store/searchTermSlice';

import './searchbar.css';
import magnifyingGlass from '../../../Images/assets/magnifyingGlass.png';

export const SearchBar = props => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onInputChange = event => {
        event.preventDefault();
        const inputValue = event.target.value;
        
        dispatch(setSearchTerm(inputValue));
    }

    return (
        <div className='searchbar-container'>
            <div className='search-bar'>
                <input type='text' id='search-bar-input' className='search-bar-input'
                onChange={onInputChange} value={searchTerm}/>
                <label htmlFor='search-bar-input'>
                    <img src={magnifyingGlass} alt='magnifying glass' 
                    id='search-bar-icon' />
                </label>
            </div>
        </div>
    );
}