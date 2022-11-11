import { useState } from 'react';

import downArrow from '../../../../../../Images/assets/downArrow.png';
import downArrowClicked from '../../../../../../Images/assets/downArrow-Clicked.png';
import downArrowHover from '../../../../../../Images/assets/downArrowHover.png';

import './downVote.css';

export const DownVoteButton = props => {
    const [image, setImage] = useState(downArrow);

    const handleMouseEnter = e => {
        e.preventDefault();
        setImage(prevState => prevState === downArrowClicked ? downArrowClicked : downArrowHover);
    }

    const handleMouseOut = e => {
        e.preventDefault();
        setImage(prevState => prevState === downArrowClicked ? downArrowClicked : downArrow);
    }

    const handleClick = e => {
        e.preventDefault();
        setImage(prevState => prevState === downArrowClicked ? downArrowHover : downArrowClicked);
    }

    return <div className='downvote-button-container'>
        <img src={image}
        alt='Downvote button'
        className='downvote-button'
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onClick={handleClick} />
    </div>
}