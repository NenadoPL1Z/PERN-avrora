import React, {FC} from 'react';
import SwiperUI from '../../../UI/ComponentsUI/SwiperUI/SwiperUI';


interface NewsIdImgProps {
    img: string[] | string
}

const NewsIdSlider: FC<NewsIdImgProps> = ({img}) => {

    return (
        <SwiperUI
            data={img}
        />
    );
};

export default React.memo(NewsIdSlider);
