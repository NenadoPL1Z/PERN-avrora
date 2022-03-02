import {useCustomRouter} from "../../../../hook/useCustomRouter";

export const useHeaderNavItem = () => {

    const {router} = useCustomRouter()

    const checkLocation = (location = '') => {
        return router.pathname === location
    }

    return {
        checkLocation
    }
}
