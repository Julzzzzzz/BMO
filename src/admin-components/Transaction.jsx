import React, { useState } from 'react'

export default function Transaction() {
const [transactions, setTransactions] = useState([])

const handleTransaction = (e) => {
    e.preventDefault()

    const transactionType = e.target.elements.bills.value
    const amount = e.target.elements.inputAmount.value

    const newTransaction = {
        type: transactionType,
        amount: amount,
        date: new Date().toLocaleString()
    }
    setTransactions([...transactions, newTransaction])
    e.target.reset()
}

    
  return (<>    
  <form onSubmit={handleTransaction}>  
    <div>
        <label> Choose Your Transaction </label>
        <select name="bills" className="bills" size="1">
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
          <option value="transfer">Transfer</option>
        </select>
    </div>
    <div>
        <label>Enter Amount</label>
        <input type='number' name='inputAmount' className='inputAmount' />
        <button type='submit' className='proceed-btn' onSubmit={handleTransaction}>Proceed</button>
    </div>
    </form>
    <div>
        <h2>Recent Transaction</h2>
        <ul>
            {transactions.map((transaction, index) => 
            <li key={index}>
                <span>Date:{transaction.date}<br/></span>
                <span>Tpye:{transaction.type}<br/></span>
                <span>Amount:{transaction.amount}<br/></span>
            </li>
            )}
        </ul>
    </div>

    </>)
}
