import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

const Counter = () => {
    const value=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    
  return (
    <div>
      <h1>Count:{value}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
