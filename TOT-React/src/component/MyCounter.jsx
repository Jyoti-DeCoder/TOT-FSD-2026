import React from 'react'
import { useState } from 'react'

function MyCounter() {
    const[counter, setCounter] = useState(100);
    function incrementCounter(){
    setCounter(counter+10);
  }
  return (
    <div>Counter Value : {counter}
    <div> 
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={()=>setCounter(counter-10)}>Decrement</button>
    </div>
    </div>
  )
  
}

export default MyCounter