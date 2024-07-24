import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager} from "app/providers/StoreProvider";
import {StateSchemaKeys} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

interface DynamicModuleLoaderProps{
    name: StateSchemaKeys,
    reducer: Reducer
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        name,
        reducer
    } = props

    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        store.reducerManager.add(name, reducer)
        dispatch({type: `@INIT ${name} reducer`})
        return () => {
            store.reducerManager.remove(name)
            dispatch({type: `@DESTROY ${name} reducer`})
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
};