
import React, { useState } from 'react'
import { addTodoApi } from '../services/api';

function TodoAdd({setRefresh}) {  // that setRefresh update state or the props  is to be recieved by this function parameter setRefresh

    let [todo,setTodo]=useState({title:""})

    async function handleSubmit(event){
        event.preventDefault()
        console.log(todo);

        let response = await addTodoApi(todo)
        console.log(response);

        if(response.status>=200 && response.status<300){
            setRefresh(Math.random()) // we need to update that state in the api call
        }
        
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>

            <div>
                <input onChange={(e)=>setTodo({...todo,title:e.target.value})}
                       type="text" placeholder='enter todo...' />
            </div>

            <div>
                <button type='submit'>ADD</button>
            </div>


        </form>
    </div>
  )
}

export default TodoAdd