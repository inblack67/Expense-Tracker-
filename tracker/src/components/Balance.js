import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';

const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  // taking all expenses in an array, map returns
  const amounts = transactions.map(transaction => transaction.amount)

  let total = 0;
  amounts.forEach(amount => total+=amount);


  return (
    <>
      <h4>Current Balance: </h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
