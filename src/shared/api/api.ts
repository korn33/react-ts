import axios, {AxiosInstance} from "axios";
import {USER_LOCALSTORAGE_KEY} from "shared/const/LocalStorage";

export const $api: AxiosInstance = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})