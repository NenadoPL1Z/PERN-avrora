import React from 'react';
import DataRender from "../../components/AnyPage/DataRender/DataRender";
import NewsData from "../../components/News/NewsData";

const News = () => {
    return (
        <DataRender title={'Новости'}>
            <NewsData/>
        </DataRender>
    );
};

export default React.memo(News);
