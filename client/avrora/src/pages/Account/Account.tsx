import React from 'react';
import {useAccountStyles} from "./style";
import {FormProvider, useForm} from 'react-hook-form';
import AccountInfo from "../../components/Account/AccountInfo/AccountInfo";
import AccountChange from "../../components/Account/AccountChange/AccountChange";
import {useAccount} from "./useAccount";

const Account = () => {

    const {
        AccountContainer,
        AccountWrapper,
        AccountTitle,
        AccountContent
    } = useAccountStyles()

    const methods = useForm();
    const {handleSubmit} = methods
    const {onSubmit} = useAccount();


    return (
        <AccountContainer>
            <FormProvider {...methods}>
                <AccountWrapper>
                    <AccountTitle>
                        Личный кабинет
                    </AccountTitle>
                    <AccountContent onSubmit={handleSubmit(onSubmit)}>
                        <AccountInfo/>
                        <AccountChange/>
                    </AccountContent>
                </AccountWrapper>
            </FormProvider>
        </AccountContainer>
    );
};

export default Account;
