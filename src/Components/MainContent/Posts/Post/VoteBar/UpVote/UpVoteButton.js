import { useState } from 'react';

import upArrow from '../../../../../../Images/assets/upArrow.png';
import upArrowClicked from '../../../../../../Images/assets/upArrow-Clicked.png';
import upArrowHover from '../../../../../../Images/assets/upArrowHover.png';

import './upVote.css';

export const UpVoteButton = props => {

    const [image, setImage] = useState(upArrow);

    const handleMouseEnter = (e) => {
        e.preventDefault();
        setImage(prevState => prevState === upArrowClicked ? upArrowClicked : upArrowHover);
    }

    const handleMouseOut = (e) => {
        e.preventDefault();
        setImage(prevState => prevState === upArrowClicked ? upArrowClicked : upArrow);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setImage(prevState => prevState === upArrowClicked ? upArrowHover : upArrowClicked);
    }

    return <div className='upvote-button-container'>
        <img src={image}
        className='upvote-button'
        alt='Upvote button'
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onClick={handleClick} />
    </div>;
};