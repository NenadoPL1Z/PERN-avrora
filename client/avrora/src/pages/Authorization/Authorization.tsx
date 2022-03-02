import React, {FC} from 'react';
import {Box} from "@mui/material";
import {useAuthorizationStyles} from "./style";
import Login from "../../components/AnyPage/Login/Login";
import Registration from "../../components/AnyPage/Registration/Registration";
import ResetPass from "../../components/AnyPage/ResetPass/ResetPass";
import {useUserContext} from "../../context/UserContext/UserContext";
import SmallButtonUI from "../../UI/ComponentsUI/SmallButtonUI/SmallButtonUI";
import ButtonUI from "../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {useCustomRouter} from "../../hook/useCustomRouter";

interface AuthorizationProps {
    content: number
}

const Authorization: FC<AuthorizationProps> = ({content}) => {
    const styles = useAuthorizationStyles();
    const {isAuth} = useUserContext();
    const {pushTo} = useCustomRouter()

    return (
        <Box component='section' sx={styles.container}>
            {isAuth && (
                <Box sx={styles.form}>
                    <Box sx={styles.formAuthTitle}>
                        Вы уже авторизованны!
                    </Box>
                    <ButtonUI onClick={pushTo('/')}>
                        ГЛАВНАЯ
                    </ButtonUI>
                </Box>
            )}
            {!isAuth && (
                <>
                    {content === 1 && <Login/>}
                    {content === 2 && <Registration/>}
                    {content === 3 && <ResetPass/>}
                </>
            )}
        </Box>
    );
};

export default Authorization;
