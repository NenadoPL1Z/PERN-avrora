import React, {FC} from 'react';

interface NewsIdImgProps {
    img: string
}

const NewsIdImg: FC<NewsIdImgProps> = ({img}) => {
    return (
        <div>
            {img}
        </div>
    );
};

export default React.memo(NewsIdImg);
