import {styled} from "@mui/material";

export const useVoteListStyles = () => {
    const SwiperContainer = styled('div')(({theme}) => ({
        width: '100%',
        height: '100%',
        padding: '10px',
        '& > .swiper': {
            width: '100%',
            height: '100%',
            '& > .swiper-wrapper': {
                '& > .swiper-slide': {
                    width: '101% !important'
                }
            }
        }

    }));

    return {
        SwiperContainer
    }
}
