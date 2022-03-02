import React, {FC} from 'react';

interface NewsIdSubtitleProps {
    subtitle: string
}

const NewsIdSubtitle: FC<NewsIdSubtitleProps> = ({subtitle}) => {
    return (
        <div>
            {subtitle}
        </div>
    );
};

export default React.memo(NewsIdSubtitle);
