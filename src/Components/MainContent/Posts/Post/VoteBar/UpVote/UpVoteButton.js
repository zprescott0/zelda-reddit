import upArrow from '../../../../../../Images/assets/upArrow.png';
import upArrowClicked from '../../../../../../Images/assets/upArrow-Clicked.png';
import upArrowHover from '../../../../../../Images/assets/upArrowHover.png';

export const UpVoteButton = props => {

    return <div className='upvote-button-container'>
        <img src={upArrow}
        className='upvote-button'
        alt='Upvote button' />
    </div>;
};