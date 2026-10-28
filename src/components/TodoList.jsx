

import React, { useEffect, useState } from 'react'
import { deleteTodoApi, listTodoApi, updateTodoApi } from '../services/api'

function TodoList({refresh}) {

  let[todos,setTodos] = useState()

  useEffect(()=>{getAllTodos()},[refresh]) // it is not called when we clik any button while it is called when the component is rendered so we use useEffect

  async function getAllTodos(){

    let response = await listTodoApi()

    console.log(response);

    if(response.status>=200 && response.status<300){

        setTodos(response.data)

        console.log(response.data);
         
    }
    
  }

async function handleDelete(id){

    let response = await deleteTodoApi(id)

    console.log(response);

    if(response.status>=200 && response.status<300){

        getAllTodos()
    }
    
}

async function handleUpdate(id){

    let response = await updateTodoApi(id)

    console.log(response);

    if(response.status<=200 && response.status>300){

        getAllTodos()


    }
    
}


  return (
    <div>

        <h1>List Todos</h1>

        {todos&& todos.map((t)=>(
            <div className='w-[75%] m-auto border p-5'>
                <div className='flex'>
                    <p>{t.title}</p>
                    <p>{t.status}</p>
                    {!t.status&&<button onClick={()=>handleUpdate(t.id)} >✅</button>}
                    <p>{}</p>
                    <button onClick={()=>handleDelete(t.id)}>❌</button>
                    <hr />
                </div>
            </div>
        ))}

    </div>
  )
}

export default TodoList