import React, {FC} from 'react';
import {useNewsIdTitleStyles} from './style'

interface NewsIdTitleProps {
    title: string
}

const NewsIdTitle: FC<NewsIdTitleProps> = ({title}) => {

    const {Title} = useNewsIdTitleStyles()

    return (
        <Title>
            {title}
        </Title>
    );
};

export default React.memo(NewsIdTitle);
