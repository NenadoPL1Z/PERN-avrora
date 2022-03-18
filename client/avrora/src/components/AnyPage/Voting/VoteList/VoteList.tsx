import React, {FC} from 'react';
import {IVoteSection} from "../../../../models/IVoteModel";
import {Swiper, SwiperSlide} from "swiper/react";
import {useVoteListStyles} from "./style";
// import {useVoteList} from "./useVoteList";
import VoteItem from "../VoteItem/VoteItem";

interface IVoteListProps {
    voteData: IVoteSection[]
}

const VoteList: FC<IVoteListProps> = ({voteData}) => {

    // const {handleInitSwiper, swiper, setSwiper} = useVoteList()
    const {SwiperContainer} = useVoteListStyles()

    return (
        <SwiperContainer>
            <Swiper allowTouchMove={false}>
                {voteData.map((voteItem, index) => (
                    <SwiperSlide>
                        <VoteItem
                            voteItem={voteItem}
                            voteIndex={`voteItem-${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
};

export default React.memo(VoteList);
