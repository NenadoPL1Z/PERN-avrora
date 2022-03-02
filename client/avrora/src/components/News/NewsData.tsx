import React from 'react';
import {Box} from "@mui/material";
import {useNewsData} from "./useNewsData";
import NewsItem from "./NewsItem/NewsItem";
import {useNewsDataStyles} from "./style";

const NewsData = () => {

    const {newsData} = useNewsData()
    const styles = useNewsDataStyles()

    return (
        <Box sx={styles.container as {}}>
            {
                newsData.map(news => (
                    <NewsItem
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        subtitle={news.subtitle}
                        date={news.updatedAt}
                        img={news.img}
                    />
                ))
            }
        </Box>
    );
};

export default React.memo(NewsData);
