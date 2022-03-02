import axios from 'axios';
import {REACT_APP_API_URL} from "../constants/constants";

const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: REACT_APP_API_URL
})

const authInterception = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterception)

export {
    $host,
    $authHost
}
