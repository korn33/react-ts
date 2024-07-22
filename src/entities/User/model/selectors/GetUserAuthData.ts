import {StateSchema} from "app/providers/StoreProvider";
import {User} from "entities/User";

export const getUserAuthData = (state: StateSchema): User => {
  return state.user.authData
}