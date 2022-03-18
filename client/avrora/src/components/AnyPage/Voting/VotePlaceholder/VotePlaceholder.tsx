import React, {FC} from 'react';
import ButtonUI from "../../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {useVotePlaceholderStyles} from "./style";

interface IVotePlacehodlerProps {
    title: string
    onStart: () => void
}

const VotePlaceholder: FC<IVotePlacehodlerProps> = ({title, onStart}) => {

    const {VoteText, VoteTitle, VoteButton, VoteSubtitle} = useVotePlaceholderStyles();

    return (
        <>
            <VoteText>
                <VoteTitle>Пройти голосование на тему:</VoteTitle>
                <VoteSubtitle>{title}</VoteSubtitle>
            </VoteText>
            <VoteButton>
                <ButtonUI onClick={onStart}>Начать</ButtonUI>
            </VoteButton>
        </>
    );
};

export default React.memo(VotePlaceholder);
