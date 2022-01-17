import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'


const lodingMessage= "Lodimg....."
const DataFetch = () => {

    const [todos, setTodos]=useState(null);
    const [isLoading, setisLoading]=useState(true);
    const [error, setError]=useState(null);


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todo")
        .then((res)=>{
            if (!res.ok){
               throw Error("featching is not successful") 
            }
            return res.json()

        })
        .then((data)=>{
            setTodos(data);
            setisLoading(false);
            setError(null)
        })
        .catch((error) =>{
            setError(error.message)
            setisLoading(false)

        })
    },[]);
    const myTodoData=todos && todos.map((todo)=>{ return <p key={todo.id}>{todo.title} + {todo.userId}</p>;});
    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p>}
            {isLoading && lodingMessage}
            {myTodoData}
            
        </div>
    )
}

export default DataFetch
