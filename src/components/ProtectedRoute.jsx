

import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({children}) { // component wrapping==>expense list create retrieve update & todo list components will be passed to the parameter children when it is rendered in app.jsx
 
    let token = localStorage.getItem("token")

    if(!token){

        return <Navigate to={"/"}></Navigate> // if there is no token navigate to login page or login component
    }

    return children  // if there is token then it willbe redirected to expense list add update page or component and that is passed through to the parameter children
}

export default ProtectedRoute