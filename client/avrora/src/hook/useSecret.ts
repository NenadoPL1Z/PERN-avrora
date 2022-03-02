import jwtDecode from "jwt-decode";

export const useSecret = () => {
    const getDataJWT = (token: string) => {
        return jwtDecode(token)
    }

    return {
        getDataJWT
    }
}
