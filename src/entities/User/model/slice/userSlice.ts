import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/const/LocalStorage";

const initialState: UserSchema = {
    authData: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthDate: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = null
            localStorage.setItem(USER_LOCALSTORAGE_KEY, '')
        }
    },
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice