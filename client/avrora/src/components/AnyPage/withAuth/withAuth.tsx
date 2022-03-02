import Authorization from "../../../pages/Authorization/Authorization";
import {FC} from "react";
import {useUserContext} from "../../../context/UserContext/UserContext";


const withAuth = (Component: FC) => {
    const Auth: FC = () => {
        const {isAuth} = useUserContext()

        if (!isAuth) {
            return (
                <Authorization content={1}/>
            );
        }

        return (
            <Component />
        );
    };

    return Auth;
};

export default withAuth;
