import axios from "axios";


const api = axios.create( // we are configuring or cutomizing by our own needs
    {

        baseURL:"http://127.0.0.1:8000/api",
        headers:{
            "Content-Type": "application/json"
        }
    }
)   // that means we are creating our own instance of axios and added to a variable api

api.interceptors.request.use(

    // we need to attach token to this api or configured or customized instance of axios or when we are making api calls one by one we have ato attch token in the headers thats why we are using interceptors

    (config)=>{
        const token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization=token
        }
        return config
    },
    (error)=>{Promise.reject(error)} // promise=>container for storing future value and has 3 states namely resolve,pending,reject


)

export default api 