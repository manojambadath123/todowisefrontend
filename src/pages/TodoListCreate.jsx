

import React, { useState } from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import { useNavigate } from 'react-router-dom'

function TodoListCreate() {

    let[refresh,setRefresh] = useState(0)  // setRefresh update state is passed to the TodoAdd component through attribute setRefresh
    let redirect = useNavigate()
    
    function handleLogout(){

      localStorage.removeItem("token")
      redirect("/")
    }
  return (
    <div>

      <button onClick={handleLogout}>Logout</button>
        <TodoAdd setRefresh={setRefresh}></TodoAdd> 
        <TodoList refresh={refresh}></TodoList>
    </div>
  )
}

export default TodoListCreate