import React from 'react';
import {Box} from "@mui/material";
import {useNewsId} from "./useNewsId";
import NewsIdTitle from "./NewsIdTitle/NewsIdTitle";
import NewsIdSubtitle from "./NewsIdSubtitle/NewsIdSubtitle";
import NewsIdImg from "./NewsIdImg/NewsIdImg";

const NewsId = () => {

    const {news} = useNewsId()
    console.log(news);

    return (
        <Box>
            <NewsIdTitle title='1'/>
            <NewsIdSubtitle subtitle='1'/>
            <NewsIdImg img='1'/>
        </Box>
    );
};

export default React.memo(NewsId);
