import React, {FC} from 'react';

interface NewsIdTitleProps {
    title: string
}

const NewsIdTitle: FC<NewsIdTitleProps> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default React.memo(NewsIdTitle);
