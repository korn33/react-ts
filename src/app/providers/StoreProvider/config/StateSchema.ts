import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {EnhancedStore, PayloadAction, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {CombinedState} from "redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";

export interface StateSchema{
    counter: CounterSchema,
    user: UserSchema,

    //async
    login?: LoginSchema,
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () =>ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: PayloadAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends  EnhancedStore<StateSchema> {
    reducerManager: ReducerManager,
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkApiConfig<TErrorType> {
    extra: ThunkExtraArgs,
    rejectValue: TErrorType
}