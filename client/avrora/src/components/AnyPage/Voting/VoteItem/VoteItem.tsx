import React, {FC} from 'react';
import {IVoteSection} from "../../../../models/IVoteModel";
import {useVoteItemStyles} from "./style";
import {Controller, useFormContext} from 'react-hook-form'
import VoteCheckbox from "../VoteCheckbox/VoteCheckbox";
import {RadioGroup} from "@mui/material";
import ButtonUI from "../../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useSwiper} from "swiper/react";

interface IVoteItemProps {
    voteItem: IVoteSection
    voteIndex: string
}

const VoteItem: FC<IVoteItemProps> = ({voteItem, voteIndex}) => {

    const {control, watch} = useFormContext();
    const {voteTitle, voteOption} = voteItem;
    const isNextVote = watch(voteIndex)
    const swiper = useSwiper()


    const {
        buttonSx,
        ItemTitle,
        CheckboxList,
        ButtonWrapper,
        ItemContainer,
    } = useVoteItemStyles()


    return (
        <ItemContainer>
            <ItemTitle>
                {voteTitle}
            </ItemTitle>
            <CheckboxList>
                <Controller
                    name={voteIndex}
                    control={control}
                    render={({field: {value, onChange}}) => (
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                        >
                            {voteOption.map(checkboxItem => (
                                <VoteCheckbox voteItem={checkboxItem}/>
                            ))}
                        </RadioGroup>
                    )}
                />
                <ButtonWrapper>
                    {!!swiper?.activeIndex && (
                        <ButtonUI sx={buttonSx}>
                            <ArrowBackIcon/>&nbsp;Предыдущий вопрос
                        </ButtonUI>
                    )}
                    {isNextVote && (
                        <ButtonUI sx={buttonSx} onClick={() => swiper.slideNext()}>
                            Следующий вопрос&nbsp;<ArrowForwardIcon/>
                        </ButtonUI>
                    )}
                </ButtonWrapper>
            </CheckboxList>
        </ItemContainer>
    );
};

export default VoteItem;
