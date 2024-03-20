import React, { useEffect, useState } from 'react'

export default function AdminDashboard() {

const [recentTransactions, setRecentTransactions] = useState([])

  useEffect(() =>{
  
    const storedTransactions = JSON.parse(localStorage.getItem('transactions') || [])
    const sortedTransactions = storedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date))

    setRecentTransactions(sortedTransactions)
  }, [])

  return (<>

    <div className='adminDashboard'>
        <h2>Transaction History</h2>
        <ul>
            {recentTransactions
                .sort((a, b) =>new Date(b.date) - new Date(a.date))
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

  </>
  )
}
