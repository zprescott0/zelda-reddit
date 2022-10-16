import './searchbar.css';
import magnifyingGlass from '../../../Images/assets/magnifyingGlass.png';

export const SearchBar = props => {

    return (
        <div className='searchbar-container'>
            <div className='search-bar'>
                <input type='text' id='search-bar-input' className='search-bar-input' />
                <label for='search-bar-input'>
                    <img src={magnifyingGlass} alt='magnifying glass' 
                    id='search-bar-icon' />
                </label>
            </div>
        </div>
    );
}