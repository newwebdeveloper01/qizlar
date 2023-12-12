;import { createContext, useReducer , useContext } from 'react'
import {reducer , initialState} from './reducer.js'
export const userContext = createContext();

export const userContextData =()=>useContext(userContext);

export const DataContext=({children})=>{
        const [state ,  dispatch] = useReducer(reducer , initialState);

        return (

            <userContext.Provider value={[state , dispatch]}>
                {children}
            </userContext.Provider>
        )
        }