import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>Rs. 0</h1>
    </>
  )
}

export default Balance
