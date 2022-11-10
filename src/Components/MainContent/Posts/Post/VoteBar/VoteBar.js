import { UpVoteButton } from "./UpVote/UpVoteButton";
import { DownVoteButton } from "./DownVote/DownVoteButton";
import { Score } from "./Score/Score";

export const VoteBar = props => {

    return <div className='votebar'>
        <UpVoteButton />
        <Score score={56} />
        <Score score={25} />
        <DownVoteButton />
    </div>;
};