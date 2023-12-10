import api from './api'


interface RegisterParams {
    lastname: string | undefined;
    firstname: string | undefined;
    email: string | undefined;
    password: string | undefined;
}

export const register = async (data : RegisterParams) => {

   return await api.post("api/auth/signup", data);
}

interface LoginParams {
    email: string | undefined;
    password: string | undefined;
}

export const login = async (data : LoginParams) => {

    return await api.post("api/auth/signin", data);
 }
 