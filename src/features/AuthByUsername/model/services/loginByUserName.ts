import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/LocalStorage";
import {ThunkApiConfig} from "app/providers/StoreProvider";

interface LoginByUserNameProps {
    username: string,
    password: string
}

export const loginByUsername =
    createAsyncThunk<User, LoginByUserNameProps, ThunkApiConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>(`/login`, authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            console.log('error:', e)
            return thunkAPI.rejectWithValue('error')
        }
    },
)