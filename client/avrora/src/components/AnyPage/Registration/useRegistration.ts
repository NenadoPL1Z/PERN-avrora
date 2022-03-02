import {SubmitHandler, FieldValues, UseFormSetError} from "react-hook-form";
import {useCallback, useMemo, useState} from "react";
import {registration} from "../../../http/userAPI";
import {useUserContext} from "../../../context/UserContext/UserContext";

type RegFormValues = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string

}

export const useRegistration = (
    watch: (name: string) => string,
    setError: UseFormSetError<RegFormValues | FieldValues>
) => {
    const {userLogin} = useUserContext()
    const [regError, setRegError] = useState<string>('');

    const password = watch('password');
    const confirmPassword = watch('confirmPassword');


    const validatePassword = () => {
        const isLength = password?.length >= 8

        if (password?.length && confirmPassword?.length) {
            if (!(password == confirmPassword)) {
                console.log(setError)
                setError(
                    'confirmPassword',
                    {type: 'string', message: 'Пароли не совподают'}
                )
            }
        }
        if (isLength) return true
        if (!password) return false
        setError(
            'password',
            {type: 'string', message: 'Минимальная длинна пароля 8'}
        )
    }

    const isConfirmPassword = validatePassword()


    const onSubmit: SubmitHandler<RegFormValues | FieldValues> = (data) => {
        const {firstName, lastName, email, password, confirmPassword} = data
        if (password == confirmPassword) {
            registration(firstName, lastName, email, password)
                .then(data => {
                    if (typeof data === 'string') {
                        setRegError(data)
                    }
                    if (data.token) {
                        userLogin(data.token)
                    }
                })
        } else {
            setError(
                'confirmPassword',
                {type: 'string', message: 'Пароли не совподают'}
            )
        }
    }

    return {
        regError,
        onSubmit,
        isConfirmPassword,
    }
}
