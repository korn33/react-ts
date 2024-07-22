import {AppButton} from "shared/ui/AppButton/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slices/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div data-testid="counter">
            <h1 data-testid="counterValue">{counterValue}</h1>
            <AppButton data-testid="increment-btn" onClick={increment}>increment</AppButton>
            <AppButton data-testid="decrement-btn" onClick={decrement}>decrement</AppButton>
        </div>
    );
};