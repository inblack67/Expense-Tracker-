import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// init state
const initialState = {

  transactions: [
  ]
  
}

const GlobalContext = createContext(initialState);

// create context
export default GlobalContext;

// provider
export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return <GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>

}

