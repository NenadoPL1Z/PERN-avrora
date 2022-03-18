import {IUserAvatarChange} from "../../components/Account/AccountInfo/useAccountInfo";
import {FieldValues, SubmitHandler} from "react-hook-form";

export interface IAccountData {
    firstName: string;
    lastName: string;
    password: string;
    repeatPassword: string;
    photo: IUserAvatarChange
}

export const useAccount = () => {
    const onSubmit: SubmitHandler<IAccountData | FieldValues> = (data) => {
        console.log(data);
    }

    return {
        onSubmit
    }
}
