import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
import {auth} from "../../http/userAPI";
import {UserProviderProps} from "./types";
import {UserModel, UserContext} from '../../models/IUserModel'
import {useSecret} from "../../hook/useSecret";
import {useCustomRouter} from "../../hook/useCustomRouter";

const UserContext = React.createContext({} as UserContext)
export const useUserContext = () => useContext(UserContext)

const UserProvider: FC<UserProviderProps> = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<UserModel>({} as UserModel);
    const {getDataJWT} = useSecret()
    const {pushTo} = useCustomRouter()

    const isAuth = useMemo(() => {
        return !!Object.keys(user).length
    }, [user])

    useEffect(() => {
        try {
            auth().then(user => {
                const res = user as UserModel | 'Invalid User'
                if (!(res === 'Invalid User')) {
                    setUser(user as UserModel)
                }
                setIsLoading(false)
            })
        } catch (e) {
            setIsLoading(false)
        }
    }, [])

    const userLogin = async (token: string) => {
        await setUser(getDataJWT(token) as UserModel)
        pushTo('/')()
    }


    return (
        <UserContext.Provider value={{user, setUser, isAuth, isLoading, userLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
