import {useState} from "react";

export const useAccountChange = () => {
    const [changePassword, setChangePassword] = useState<boolean>(true);

    const handleClickChangePassword = () => {
        setChangePassword(!changePassword)
    }

    return {
        changePassword,
        handleClickChangePassword
    }
}
