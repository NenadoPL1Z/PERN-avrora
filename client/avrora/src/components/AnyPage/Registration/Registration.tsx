import React, {FC} from 'react';
import {Box} from "@mui/material";
import TextFieldUI from "../../../UI/ComponentsUI/TextFieldUI/TextFieldUI";
import TextFieldPasswordUI from "../../../UI/ComponentsUI/TextFieldUI/TextFieldPasswordUI/TextFieldPasswordUI";
import ButtonUI from "../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {FormProvider, useForm} from "react-hook-form";
import {useAuthorizationStyles} from "../../../pages/Authorization/style";
import {useRegistration} from "./useRegistration";
import {useCustomRouter} from "../../../hook/useCustomRouter";

const Registration: FC = () => {

    const styles = useAuthorizationStyles()
    const methods = useForm();
    const {control, handleSubmit, watch, setError} = methods
    const {onSubmit, isConfirmPassword, regError} = useRegistration(watch, setError)
    const {pushTo} = useCustomRouter()

    return (
        <FormProvider {...methods}>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component='form'
                sx={styles.form}
            >
                <Box component='h2' sx={styles.formTitle}>
                    Регистрация
                </Box>
                <TextFieldUI
                    controller={{
                        name: 'firstName',
                        control: control,
                    }}
                    textField={{
                        label: 'Имя',
                        sx: styles.input,
                        type: 'text'
                    }}
                    errorMessage='Введите ваше имя'
                    required={true}
                />
                <TextFieldUI
                    controller={{
                        name: 'lastName',
                        control: control,
                    }}
                    textField={{
                        label: 'Фамилия',
                        sx: styles.input,
                        type: 'text'
                    }}
                    errorMessage='Введите вашу фамилию'
                    required={true}
                />
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
                        sx: styles.input,
                    }}
                    errorMessage='Введите пароль'
                    required={true}
                    pattern='[^a-zA-Z0-9]'
                />
                {isConfirmPassword && (
                    <TextFieldPasswordUI
                        controller={{
                            name: 'confirmPassword',
                            control: control
                        }}
                        textField={{
                            label: 'Повторите Пароль',
                            sx: styles.input,
                        }}
                        errorMessage='Подтвердите пароль'
                        required={true}
                        pattern='[^a-zA-Z0-9]'
                    />
                )}
                {regError && (
                    <Box sx={styles.error}>
                        {regError}
                    </Box>
                )}
                <ButtonUI type='submit'>
                    РЕГИСТРАЦИЯ
                </ButtonUI>
                <ButtonUI
                    onClick={pushTo('/signin')}
                    sx={styles.button}
                >
                    ВХОД
                </ButtonUI>
            </Box>
        </FormProvider>
    );
};

export default Registration;
