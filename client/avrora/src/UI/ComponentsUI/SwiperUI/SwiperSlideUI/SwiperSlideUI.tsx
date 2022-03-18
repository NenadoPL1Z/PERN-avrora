import React, {FC} from 'react';
import {useSlideStyle} from './style'

interface SwiperSlideUIProps {
    slide: string
}

const SwiperSlideUI: FC<SwiperSlideUIProps> = ({slide}) => {

    const {SlideImg} = useSlideStyle()

    return (
        <SlideImg 
        src={slide} 
        alt='sliderPhoto'
        />
    );
};

export default React.memo(SwiperSlideUI);
