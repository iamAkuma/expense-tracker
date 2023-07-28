import React from 'react'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    { transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
     <button className='delete-btn'>X</button>
</li>
  )
} 

export default Transaction