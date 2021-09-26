import {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();

export const GlobalStateProvider = ({reducer,initialState, children})=>{
    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
}


export const initialState = {
    input:"",
    statusFilter:"ALL",
    orderByNameFilter:"",
    orderByOrderNumberFilter:"",
    isLoggedIn:sessionStorage.getItem("user")!=null
}
export const useGlobalStateValue = ()=> useContext(StateContext)

