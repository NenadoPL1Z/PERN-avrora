import React from 'react';
import TextFieldUI from "../../../UI/ComponentsUI/TextFieldUI/TextFieldUI";
import {useFormContext} from "react-hook-form";
import {useUserContext} from "../../../context/UserContext/UserContext";
import {useAccountChangeStyles} from "./style";
import ButtonUI from "../../../UI/ComponentsUI/ButtonUI/ButtonUI";
import {useAccountChange} from "./useAccountChange";

const AccountChange = () => {

    const {control} = useFormContext();
    const {user: {firstName, lastName}} = useUserContext()
    const {
        InputBoxMUI,
        ChangePasswordMUI,
        ChangeContainerMUI,
        ButtonContainerMUI,
    } = useAccountChangeStyles()


    const {
        handleClickChangePassword,
        changePassword
    } = useAccountChange()


    // const formValue = watch() as IAccountData

    // const isSave = useMemo(() => {
    //     if (formValue.lastName && formValue.firstName) {
    //         if (
    //             firstName !== formValue.firstName
    //             || lastName !== formValue.lastName
    //             || formValue.password
    //             || formValue.repeatPassword
    //             || formValue.photo?.file
    //         ) {
    //             return true
    //         }
    //     }
    //     return false
    // }, [formValue])
    const isSave = true

    return (
        <ChangeContainerMUI>
            <InputBoxMUI>
                <TextFieldUI
                    controller={{
                        name: 'firstName',
                        control,
                    }}
                    textField={{
                        label: 'Имя',
                        defaultValue: firstName
                    }}
                />
            </InputBoxMUI>
            <InputBoxMUI>
                <TextFieldUI
                    controller={{
                        name: 'lastName',
                        control,
                    }}
                    textField={{
                        label: 'Фамилия',
                        defaultValue: lastName
                    }}
                />
            </InputBoxMUI>
            <ChangePasswordMUI sx={{visibility: changePassword ? 'hidden': 'visible'}}>
                <InputBoxMUI>
                    <TextFieldUI
                        controller={{
                            name: 'password',
                            control,
                        }}
                        textField={{
                            label: 'Новый пароль',
                        }}
                    />
                </InputBoxMUI>
                <InputBoxMUI>
                    <TextFieldUI
                        controller={{
                            name: 'repeatPassword',
                            control,
                        }}
                        textField={{
                            label: 'Подвтердите новый пароль',
                        }}
                    />
                </InputBoxMUI>
            </ChangePasswordMUI>
            <ButtonContainerMUI>
                <ButtonUI
                    onClick={handleClickChangePassword}>
                    {changePassword ? 'Изменить пароль' : 'Оставить текущий'}
                </ButtonUI>
                {isSave && (
                    <ButtonUI type='submit'>Сохранить</ButtonUI>
                )}
            </ButtonContainerMUI>
        </ChangeContainerMUI>
    );
};

export default React.memo(AccountChange);
