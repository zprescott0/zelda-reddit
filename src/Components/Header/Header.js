import './header.css';

import { Title } from "./Title/Title";
import { SearchBar } from "./SearchBar/SearchBar";
import { UpdateTime } from "./UpdateTime/UpdateTime";

export const Header = props => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Title />
                <SearchBar />
                <UpdateTime />
            </div>
        </div>
    );
}