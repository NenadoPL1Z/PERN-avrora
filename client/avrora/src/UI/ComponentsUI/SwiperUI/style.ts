import {styled} from '@mui/material'

export const useSwiperStyle = () => {
    const SwiperContainer = styled('div')(({ theme }) => ({
        width: '100%',
        height: '500px',
        borderRadius: '10px',
        '& > .swiper': {
            height: '100%',
            borderRadius :'10px',
            '& > .swiper-pagination': {
                '& > .swiper-pagination-bullet': {
                    backgroundColor: '#ffffff',
                    opacity: 1
                },
                '& > .swiper-pagination-bullet-active': {
                    backgroundColor: 'orange',
                    opacity: 1
                }
            },
            '& > .swiper-button-prev': {
                color: '#ff6505',
                fontSize: '20px'
            },
            '& > .swiper-button-next': {
                color: '#ff6505',
            },
            '& > .swiper-button-disabled': {
                display: 'none'
            }
        }
    }));

    return {
        SwiperContainer,
    }
}
