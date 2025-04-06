import axios from "axios";
import { loader } from "../store/dataSlice";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    cors:true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const setupInterceptor = (dispatch)=>{
    axiosInstance.interceptors.request.use(function (config) {
        dispatch(loader(true))
        const token = JSON.parse(localStorage.getItem('ERP'));
        if(token){
            config.headers.Authorization = token.token
        }
        return config;
    }, function (error) {
        dispatch(loader(false))
        return Promise.reject(error);
    });
    
    axiosInstance.interceptors.response.use(function (response) {
        dispatch(loader(false))
        return response;
    }, function (error) {
        dispatch(loader(false))
        return Promise.reject(error);
    });
}

export default axiosInstance