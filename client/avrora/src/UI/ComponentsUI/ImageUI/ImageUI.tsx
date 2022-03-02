import React, {FC} from 'react';
import Image from "next/image";
import {REACT_APP_API_URL} from "../../../constants/constants";


interface ImageUIProps {
    img: string,
}

const ImageUI: FC<ImageUIProps> = ({img}) => {
    return (
        <Image
            src={`${REACT_APP_API_URL}${img}`}
            loader={() => `${REACT_APP_API_URL}${img}`}
            objectFit='cover'
            alt='newsImage'
            width={150}
            height={150}
        />
    );
};

export default ImageUI;
