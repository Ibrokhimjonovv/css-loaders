import { createContext, useState } from "react";


const Context = createContext();

const ContextProvider = ({children}) => {
    const [test, setTest] = useState('qq');

    return (
        <Context.Provider value={{ test }}>
            {children}
        </Context.Provider>
    )
} 

export { Context, ContextProvider }