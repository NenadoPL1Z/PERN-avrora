import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import {useHomeSwiper} from "./useHomeSwiper";
import {useHomeSwiperStyles} from "./style";
import 'swiper/css';
import HomeAvrora from "../HomeAvrora/HomeAvrora";

const HomeSwiper = () => {

    const {
        isData,
        swiperData,
        photoLocation
    } = useHomeSwiper()

    const {
        SwiperContainerMUI,
        SwiperImage
    } = useHomeSwiperStyles()

    return (
        <SwiperContainerMUI>
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 3000}}
                speed={800}
                loop={true}
            >
                {isData && (
                    swiperData.map(photoName => (
                        <SwiperSlide key={photoName}>
                            <SwiperImage
                                src={photoLocation + photoName}
                                alt='swiper-slide'
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
            <HomeAvrora/>
        </SwiperContainerMUI>
    );
};

export default React.memo(HomeSwiper);
