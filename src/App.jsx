import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoListCreate from './pages/TodoListCreate'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    
       <BrowserRouter>

          <Routes>

            <Route path='/todo-list-create' element={<ProtectedRoute>
              <TodoListCreate>
                
              </TodoListCreate>
            </ProtectedRoute>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='' element={<Login></Login>}></Route> 




          </Routes>
       
       
       </BrowserRouter>
    
  )
}

export default App