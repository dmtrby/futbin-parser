import React, { useState } from 'react';

export const CountContext = React.createContext();

const CounterContext = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const updateValue = () => {
        setCounter(counter + 1);
    }
    return (<CountContext.Provider value={{ value: counter, updateValue }}>{children}</CountContext.Provider>)
}

export default CounterContext;