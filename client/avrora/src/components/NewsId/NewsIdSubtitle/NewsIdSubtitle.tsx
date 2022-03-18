import React, {FC} from 'react';
import {useNewsIdSubtitleStyles} from './style'

interface NewsIdSubtitleProps {
    subtitle: string
}

const NewsIdSubtitle: FC<NewsIdSubtitleProps> = ({subtitle}) => {
    const {Subtitle} = useNewsIdSubtitleStyles()

    return (
        <Subtitle>
            {subtitle}
        </Subtitle>
    );
};

export default React.memo(NewsIdSubtitle);
