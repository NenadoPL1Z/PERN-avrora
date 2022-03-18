import {styled} from "@mui/material";

export const useHomeSwiperStyles = () => {
    const SwiperContainerMUI = styled('section')(({theme}) => ({
        position: 'relative',
        '& > .swiper': {
            width: '100%',
            height: 'calc(100vh - 62px)',
        }
    }));

    const SwiperImage = styled('img')(({theme}) => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }));

    return {
        SwiperImage,
        SwiperContainerMUI
    }
}
