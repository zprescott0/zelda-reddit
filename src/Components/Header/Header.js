import { Title } from "./Title/Title";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = props => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Title />
                <SearchBar />
            </div>
        </div>
    );
}