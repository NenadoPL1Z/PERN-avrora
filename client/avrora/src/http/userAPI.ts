import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

interface RegistartionCatch {
    response: {
        data: {
            message: string
        }
    }
}


export const registration = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        const {data} = await $host.post('api/user/registration', {firstName, lastName, email, password, role: 'USER'})
        localStorage.setItem('token', data?.token)
        return data
    } catch (e) {
        const {response} = e as RegistartionCatch
        return response.data.message
    }
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/login', {email, password, role: 'USER'})
    localStorage.setItem('token', data?.token)
    return data
}

export const auth = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data?.token)
        return jwtDecode(data?.token)
    } catch (e) {
        return 'Invalid User'
    }
}

export const getPagesNews = async (limit: number, page: number) => {
    const {data} = await $host.post('api/news/getLastNews', {limit, page})

    if (Array.isArray(data?.rows)) {
        return data.rows
    }

    return data
}

export const getNewsId = async (id: number) => {
    const {data} = await $host.post('api/news/info', {id})
    return data
}
