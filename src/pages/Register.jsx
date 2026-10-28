
import React, { useState } from 'react'
import { signUpApi } from '../services/api';
import { Link } from 'react-router-dom';

function Register() {

    let[user,setUser]=useState({"username":"","email":"","password":""})

    async function handleSubmit(event) //since await keyword is used we need make this function asyncronous sice the response is cathced asynchronously
    {
       event.preventDefault() // not to frequently refreshing the text field or box or page
       console.log(user); // we need to print current state when we click the submit button
       let response = await signUpApi(user) // this function will return a promise so we need to wait till the response and use keyword await
       console.log(response);  //payload or state need to be passed throuth the fuction as parameter
      

    }

    
    return (
        <div>
            <form  action="" onSubmit={handleSubmit} className='w-[75%] m-auto border p-10'>

                <div>
                    <label htmlFor="">Username</label>
                    <input onChange={(e)=>{setUser({...user,username:e.target.value})}} // if we are making any change in the textbox we need to add attribue namely onClick() or onChange()
                           type="text" placeholder='enter username' /> 
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>{setUser({...user,email:e.target.value})}}
                           type="text" placeholder='enter email' />
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=>{setUser({...user,password:e.target.value})}}
                           type="password" />
                </div>

                <div>
                    <button className='border' type='submit'>Register</button>
                </div>
            </form>
            <div>
                <Link to={"/"}>SignIn</Link>
                
            </div>
        </div>
        
    )
}

export default Register