import {StateSchema} from "app/providers/StoreProvider";

export const getLoginPassword = (state: StateSchema): string => {
    return state.login?.password || ""
}