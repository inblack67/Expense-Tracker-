import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';

const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)

  let income = 0;
  amounts.forEach(amount => amount > 0 ? income+=Math.abs(amount) : income);

  let expense = 0;
  amounts.forEach(amount => amount < 0 ? expense+=Math.abs(amount) : expense);

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${expense}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses
