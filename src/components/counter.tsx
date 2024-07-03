import React, {useState} from 'react';
import classes from './counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(prevCount => prevCount * 2)
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            dgfdsg
            <button onClick={increment}>increment</button>
        </div>
    );
};