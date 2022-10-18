import { useSelector } from 'react-redux';

import './updateTime.css';

import { selectUpdateTime } from '../../../store/updateTimeSlice';

export const UpdateTime = props => {
    const updateTime = useSelector(selectUpdateTime);

    return <div class='update-time-container'>
        <span class='update-time'>Last updated: {updateTime}</span>
    </div>;
}