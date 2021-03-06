import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState   = {
    transactions:[
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book',   amount:-10},
        {id:4, text:'Camera', amount:-150},
    ]
}

export const GlobalContext          = createContext(intialState);

export const GloblaProvider = ({children}) =>{
    const[state,dispatch]       = useReducer(AppReducer,intialState);

    const DeleteTransaction = (id) =>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }    
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            DeleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    );
}