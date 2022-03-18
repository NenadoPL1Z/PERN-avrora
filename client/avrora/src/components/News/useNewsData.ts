import {useEffect, useMemo, useState} from "react";
import {useCustomRouter} from "../../hook/useCustomRouter";
import {getPagesNews} from "../../http/userAPI";
import {NewsItemModel} from "../../models/INewsModel";

export const useNewsData = () => {

    const {locationQuery} = useCustomRouter()

    const [newsData, setNewsData] = useState<NewsItemModel[]>([]);

    const category = useMemo(() => locationQuery?.category, [locationQuery])
    const limit = 10

    useEffect(() => {
        try {
            getPagesNews(limit, 1)
            .then(r => {
                if (Array.isArray(r)) {
                    setNewsData(r as NewsItemModel[])
                }
            })
        } catch (e) {
            console.log(e)
        }
    }, [category])



    return {
        newsData
    }
}
