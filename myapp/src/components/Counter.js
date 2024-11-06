import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeCondition, decrement, increment, reset } from './counterSlice'

const Counter = () => {
    const value=useSelector((state)=>state.counter.value)
    const condition=useSelector((state)=>state.counter.condition)
    const dispatch=useDispatch()
    
  return (
    <div>
      <h1>Count:{value}</h1>
      <h1>condition:{condition.toString()}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <button onClick={()=>dispatch(changeCondition())}>changeCondition</button>
    </div>
  )
}

export default Counter
