

import React, { useState } from 'react'
import { signInApi } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';






function Login() {

    let [credential,setCredential] = useState({username:"",password:""})

    let redirect = useNavigate()

    async function handleSubmit(event){

        event.preventDefault()
        console.log(credential);
        let response = await signInApi(credential) // we need to to wait until the promise is returned so keyword await is used and alse we need to pass the payload as credential state
        console.log(response);
        
        if(response.status>=200 && response.status<300){ // to check whether the response is successfull or not using attributte status

            console.log(response.data); // data is printed on the console {"token":265464854549656gcthg}

            let authToken = response.data.token // 265464854549656gcthg

            localStorage.setItem("token","Token "+authToken) // saved or stored or added into the local storage in browser ,here data willbe persistd or withheld or holded till we clear or use clear() in the console

            // setLoading(false) // there is another storage namely session storage in that token should be stored only until that session ends

            redirect("/todo-list-create")



        }
        else{
            console.log("error");
            
        }

        
    }
  return (
    <div>
        <form action="" on onSubmit={handleSubmit}>

            <div>
                <label htmlFor="">Username</label>
                <input onChange={(e)=>setCredential({...credential,username:e.target.value})}
                       type="text" placeholder='enter username' />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input  onChange={(e)=>setCredential({...credential,password:e.target.value})}
                        type="password" placeholder='enter password' />
            </div>

            <div>
                <button type='submit'>login</button>
            </div>
            
        </form>

        <button>
            sign in with google
        </button>
        <div>

            <Link to={"/register"}>Register</Link>

        </div>
        


       
        
    </div>
  )
}

export default Login