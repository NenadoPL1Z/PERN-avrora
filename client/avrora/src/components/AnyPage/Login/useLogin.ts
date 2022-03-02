import {SubmitHandler, FieldValues, UseFormWatch} from "react-hook-form";
import {login} from "../../../http/userAPI";
import {useEffect, useState} from "react";
import {useUserContext} from "../../../context/UserContext/UserContext";

type LoginFormValues =  {
    email: string,
    password: string

}

export const useLogin = (
    watch: UseFormWatch<LoginFormValues | FieldValues>
) => {
    const {userLogin} = useUserContext()
    const [loginError, setLoginError] = useState<string>('');
    const password = watch('password')
    const email = watch('email')

    const onSubmit: SubmitHandler<LoginFormValues | FieldValues> = (data) => {
        login(data.email, data.password).then(r => {
            const message = r?.message
            const token = r?.token

            if (message) {
                console.log(message)
                setLoginError(message);
            }

            if (token) {
                userLogin(token)
            }
        })
    }

    useEffect(() => {
        setLoginError('')
    }, [password, email])

    return {
        onSubmit,
        loginError
    }
}
