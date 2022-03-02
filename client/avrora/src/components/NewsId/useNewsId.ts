import {useEffect, useMemo, useState} from "react";
import {NewsItemModel} from "../../models/News";
import {useCustomRouter} from "../../hook/useCustomRouter";
import {getNewsId} from "../../http/userAPI";

export const useNewsId = () => {
    const {locationQuery} = useCustomRouter();
    const [news, setNews] = useState<NewsItemModel>({} as NewsItemModel)
    const newsId = useMemo(() => locationQuery.id, [locationQuery])

    useEffect(() => {
        if (newsId) {
            getNewsId(+newsId)
                .then(news => {
                    if (news?.id) {
                        setNews(news)
                    }
                })
        }
    }, [newsId]);

    console.log(locationQuery);

    return {
        news
    }
}
