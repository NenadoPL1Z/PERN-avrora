export interface UserModel {
    email: string
    id: number
    roles: string
    firstName: string,
    lastName: string
}

export interface UserContext {
    user: UserModel
    setUser: (user: UserModel) => void;
    isAuth: boolean;
    isLoading: boolean,
    userLogin: (token: string) => void
}
