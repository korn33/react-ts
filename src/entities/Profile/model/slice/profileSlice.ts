import {createSlice} from '@reduxjs/toolkit'
import {ProfileSchema} from "../types/Profile";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    profileData: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice