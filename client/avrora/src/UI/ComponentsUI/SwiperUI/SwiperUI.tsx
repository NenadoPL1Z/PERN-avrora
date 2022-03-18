
import React, {FC, useMemo} from 'react';
import {useSwiperStyle} from './style'
import SwiperSlideUI from './SwiperSlideUI/SwiperSlideUI';
import {REACT_APP_API_URL} from "../../../constants/constants";

import { Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


interface SwiperUIProps {
    data: string[] | string
}

const SwiperUI: FC<SwiperUIProps> = ({data}) => {

    const {SwiperContainer} = useSwiperStyle()
    const isLength = Array.isArray(data) && data.length
    const firstPhoto = useMemo(() => Array.isArray(data) ? data[0] : data, [data])


    return (
        <SwiperContainer>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                spaceBetween={10}
                modules={[Navigation, Pagination]}
            >
                {isLength ? (
                    data.map(slide => (
                        <SwiperSlide>
                            <SwiperSlideUI slide={slide}/>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <SwiperSlideUI
                            slide={`${REACT_APP_API_URL}${firstPhoto}`}
                        />
                    </SwiperSlide>
                )}
                <SwiperSlide>
                    <SwiperSlideUI
                        slide={`${REACT_APP_API_URL}${firstPhoto}`}
                    />
                </SwiperSlide>
            </Swiper>
        </SwiperContainer>
    );
};

export default React.memo(SwiperUI);
