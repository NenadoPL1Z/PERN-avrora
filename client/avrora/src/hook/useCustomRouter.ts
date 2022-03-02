import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

export const useCustomRouter = () => {
    const router = useRouter()

    const handlePushLocation = (location: string, query?: ParsedUrlQuery) => {
        return () => {
            router.push({
                pathname: location,
                query: query
            }).then(r => r)
        }
    };

    return {
        router,
        locationQuery: router?.query,
        pushTo: handlePushLocation
    }
}
