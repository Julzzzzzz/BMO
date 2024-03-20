import React, { useEffect, useState } from 'react'

export default function Transaction() {
const [transactions, setTransactions] = useState([])

useEffect(() => {
const storedTransactions = JSON.parse(localStorage.getItem('transactions'))

if(storedTransactions) {
    setTransactions(storedTransactions)
}
}, [])

const generateRandomId = () => {
     const randomNumber = Math.random().toString(36).substring(2)
     const transactionId = 'BMO' + randomNumber

     return transactionId
}

const handleTransaction = (e) => {
    e.preventDefault()

    const transactionType = e.target.elements.bills.value
    const amount = e.target.elements.inputAmount.value
    const transactionId = generateRandomId()

    const newTransaction = {
        id: transactionId, 
        type: transactionType,
        amount: amount,
        date: new Date().toLocaleString()
    }
    const updatedTransactions = [...transactions, newTransaction]
    setTransactions(updatedTransactions)
    
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
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
        <button type='submit' className='proceed-btn'>Proceed</button>
    </div>
    </form>
    <div>
        <h2>Recent Transaction</h2>
        <ul>
            {transactions
                .sort((a, b) =>new Date(b.date) - new Date(a.date))
                .slice(0,3)
                .map((transaction, index) => 
            <li key={index}>
                <span>Id:{transaction.id}<br/></span>
                <span>Date:{transaction.date}<br/></span>
                <span>Tpye:{transaction.type}<br/></span>
                <span>Amount:{transaction.amount}<br/></span>
            </li>
            )}
        </ul>
    </div>

    </>)
}
