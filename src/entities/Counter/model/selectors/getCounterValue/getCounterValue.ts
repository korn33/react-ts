import {getCounter} from "../getCounter/getCounter";
import {CounterSchema} from "../../types/counterSchema";
import {createSelector} from "@reduxjs/toolkit";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)