/*
    props:
    -num: An integer to indicate which style to use.
*/

import './tempPost.css';

import { VoteBar } from "./VoteBar/VoteBar";

export const TempPost = props => {
    const testStyle1 = {
        backgroundColor: 'blue',
        height: '400px'
    };

    const testStyle2 = {
        backgroundColor: 'red',
        height: '500px'
    };

    const testStyle3 = {
        backgroundColor: 'green',
        height: '200px'
    };

    let currentStyle;
    switch (props.num) {
        case 1:
            currentStyle = testStyle1;
            break;
        case 2:
            currentStyle = testStyle2;
            break;
        case 3:
            currentStyle = testStyle3;
            break;
        default:
            currentStyle = testStyle1;
    };

    return <div className='temp-post'>
        <VoteBar />
        <div className='content' style={currentStyle}></div>
    </div>
};