import React, {FC} from 'react';
import {Box} from "@mui/material";
import TextFieldUI from "../../../UI/ComponentsUI/TextFieldUI/TextFieldUI";
import {useForm, FormProvider} from "react-hook-form";
import {useAuthorizationStyles} from "../../../pages/Authorization/style";
import TextFieldPasswordUI from "../../../UI/ComponentsUI/TextFieldUI/TextFieldPasswordUI/TextFieldPasswordUI";
import ButtonUI from "../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {useLogin} from "./useLogin";
import SmallButtonUI from "../../../UI/ComponentsUI/SmallButtonUI/SmallButtonUI";
import {useCustomRouter} from "../../../hook/useCustomRouter";


const Login: FC = () => {

    const styles = useAuthorizationStyles();
    const methods = useForm();
    const {control, handleSubmit, watch} = methods
    const {onSubmit, loginError} = useLogin(watch)
    const {pushTo} = useCustomRouter()

    return (
        <FormProvider {...methods}>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component='form'
                sx={styles.form}
            >
                <Box component='h2' sx={styles.formTitle}>
                    Вход в аккаунт
                </Box>
                <TextFieldUI
                    controller={{
                        name: 'email',
                        control: control,
                    }}
                    textField={{
                        label: 'Почта',
                        sx: styles.input,
                        type: 'email'
                    }}
                    errorMessage='Введите почту'
                    required={true}
                />
                <TextFieldPasswordUI
                    controller={{
                        name: 'password',
                        control: control
                    }}
                    textField={{
                        label: 'Пароль',
                        sx: styles.inputTwo,
                    }}
                    errorMessage='Введите пароль'
                    required={true}
                    pattern='[^a-zA-Z0-9]'
                />
                <Box style={styles.error}>
                    {loginError}
                </Box>
                <Box sx={styles.resetPassword}>
                    <SmallButtonUI onClick={pushTo('/reset')}>
                        Забыли пароль?
                    </SmallButtonUI>
                </Box>
                <ButtonUI type='submit'>
                    Вход
                </ButtonUI>
                <ButtonUI
                    onClick={pushTo('/signup')}
                    sx={styles.button}
                >
                    Зарегестрироваться
                </ButtonUI>
            </Box>
        </FormProvider>
    );
};

export default Login;
