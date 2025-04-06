import axios from "axios";
import { loader } from "../store/AuthSlice";


const axiosInstance = axios.create({
    baseURL: 'https://erp-school-backend.onrender.com',
    withCredentials: true,
    cors: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export const setupInterceptor = (dispatch) => {
    axiosInstance.interceptors.request.use(function (config) {
        dispatch(loader(true))
        const token = JSON.parse(localStorage.getItem('teacher'));
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