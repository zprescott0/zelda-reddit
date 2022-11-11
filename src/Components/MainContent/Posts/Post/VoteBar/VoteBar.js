import './VoteBar.css';

import { UpVoteButton } from "./UpVote/UpVoteButton";
import { DownVoteButton } from "./DownVote/DownVoteButton";
import { Score } from "./Score/Score";

export const VoteBar = props => {

    return <div className='votebar'>
        <div className='upvote vote-container'>
            <UpVoteButton />
            <Score score={56} />
        </div>
        <div className='downvote vote-container'>
            <Score score={25} />
            <DownVoteButton />
        </div>
    </div>;
};