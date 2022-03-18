import React, {FC} from 'react';
import {FormProvider, useForm} from 'react-hook-form'
import {IVoteModel} from "../../../models/IVoteModel";
import {useVotingStyles} from "./style";
import {useVoting} from "./useVoting";
import VotePlaceholder from "./VotePlaceholder/VotePlaceholder";
import VoteList from "./VoteList/VoteList";

interface IVotingProps {
    data: IVoteModel
}

const Voting: FC<IVotingProps> = ({data}) => {
    const methods = useForm();
    const {handleStartVote, startVote} = useVoting()
    const {VoteContainer} = useVotingStyles();

    return (
        <VoteContainer>
            <FormProvider {...methods}>
                {startVote && <VoteList voteData={data.voteSection}/>}
                {!startVote &&  <VotePlaceholder title={data.title} onStart={handleStartVote}/>}
            </FormProvider>
        </VoteContainer>
    );
};

export default React.memo(Voting);
