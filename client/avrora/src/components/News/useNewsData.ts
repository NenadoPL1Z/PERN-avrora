import {useEffect, useMemo, useState} from "react";
import {useCustomRouter} from "../../hook/useCustomRouter";
import {getPagesNews} from "../../http/userAPI";
import {NewsItemModel} from "../../models/News";

export const useNewsData = () => {

    const {locationQuery} = useCustomRouter()

    const [newsData, setNewsData] = useState<NewsItemModel[]>([]);

    const category = useMemo(() => locationQuery?.category, [locationQuery])

    useEffect(() => {
        getPagesNews(5, 1)
            .then(r => {
                if (Array.isArray(r)) {
                    setNewsData(r as NewsItemModel[])
                }
            })
    }, [category])



    return {
        newsData
    }
}
