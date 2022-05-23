import { createContext, useReducer } from 'react'

const reducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE':
            return {
                ...action.payload
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const DrawerContext = createContext()

export const DrawerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        open: false,
    })
    return (
        <DrawerContext.Provider value={{ state, dispatch }}>
            {children}
        </DrawerContext.Provider>
    )
}