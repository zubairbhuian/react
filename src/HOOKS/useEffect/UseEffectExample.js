import React, { useState , useEffect } from 'react';

const UseEffectExample = () => {
 const [count , setCount]=useState(0);


 useEffect (()=>{
   console.log("useEffect");  
 },[count])
    return (
        <div>
            {console.log("randaring")}
            <h1>Count: {count}</h1>
            <button onClick={()=> {setCount(count=> count + 1)}}> + </button>
            <button onClick={()=> {setCount(count=> count - 1)}}> - </button>
        </div>
    )
}

export default UseEffectExample
