

export const Score = props => {
    console.log(props.score);
    let scoreValue = props.score;

    //Set score to 0 if it is not defined or a negative number.
    if (scoreValue === undefined || scoreValue < 0) {
        scoreValue = 0;
    }

    //Round score if it is greater than 10000
    if (scoreValue > 1000) {
        scoreValue /= 1000;
        scoreValue = Math.round(scoreValue * 10) / 10;
        scoreValue += 'k';
    }


    return <div className='score-container'>
        <span className='score'>{scoreValue}</span>
    </div>;
};