import {styled} from '@mui/material'

export const useSlideStyle = () => {
    const SlideImg = styled('img')(({ theme }) => ({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '10px'
    }));

    return {
        SlideImg
    }
}