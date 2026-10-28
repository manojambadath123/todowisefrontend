import axios from "axios"
import api from "./commonApi"


// let BASEURL = `http://127.0.0.1:8000/api`

export async function signUpApi(payLoad){

    // let url = " http://127.0.0.1:8000/api/signup/"

    // let headers = {
    //      "Content-Type": "application/json"
    // }

    // return await axios.post(url,payLoad,{headers})

    return await api.post("/signup/",payLoad)

}

export async function signInApi(payLoad){

    // let url = "http://127.0.0.1:8000/api/token/"

    // let headers = {
    //      "Content-Type": "application/json"
    // }

    // return await axios.post(url,payLoad,{headers})

    return await api.post("/token/",payLoad)

}

export async function addTodoApi(payLoad){

    // let url = " http://127.0.0.1:8000/api/todos/"

    // let authToken = localStorage.getItem("token")
    
    // let headers = {
    //     "Content-Type": "application/json",
    //     "Authorization" : authToken
    // }

    // return await axios.post(url,payLoad,{headers})

    return await api.post("/todos/",payLoad)


}

export async function listTodoApi(){

    // let url = " http://127.0.0.1:8000/api/todos/"

    // let authToken = localStorage.getItem("token")

    // let headers = {
    //     "Accept": "application/json",
    //     "Authorization" : authToken
    // }

    // return await axios.get(url,{headers})

    return await api.get("/todos/")


}

export async function deleteTodoApi(id){

    // let url = `http://127.0.0.1:8000/api/todos/${id}/`

    // let authToken = localStorage.getItem("token")

    // let headers = {

    //     "Accept": "application/json",
    //     "Authorization" : authToken

    // }

    // return await axios.delete(url,{headers})

    return await api.delete(`/todos/${id}/`)
}

export async function updateTodoApi(id){

    // let url = `http://127.0.0.1:8000/api/todos/${id}/`

    let payLoad = {

        "status":true
    }

    // let authToken = localStorage.getItem("token")

    // let headers = {

    //     "Content-Type": "application/json",
    //     "Authorization" : authToken

    // }

    // return await axios.patch(url,payLoad,{headers})

    return await api.patch(`/todos/${id}/`,payLoad)


}