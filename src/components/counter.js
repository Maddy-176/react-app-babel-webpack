import React,{useState} from 'react';

function counter() {
    const [count,setCount]= useState(0);

  return (
    <div>
        <h2>Count: {count}</h2>
        <span>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button> &nbsp;
        <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button> &nbsp;
        <button onClick={()=>setCount(0)}>Reset</button>

        </span>

    </div>
  )
}

export default counter