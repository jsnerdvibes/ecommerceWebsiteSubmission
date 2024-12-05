import axios from 'axios'
import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {
    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleClick=(e)=>{
        e.preventDefault();

    const newEntry = {
      email:email,
      password:password
    }

    //post request to send user info in the database

    axios.post('https://exommerce-backend-api.vercel.app/auth/login',newEntry)
    .then((res)=>{
      localStorage.setItem('jwt',`${res.data.jwtToken}`)
      const tempToken= res.data.jwtToken
      const notify = (msg) => toast.success(`${msg}`);
      notify(res.data.messege)
      navigate('/',{state:{tempToken}})
    }).catch((error)=>{
      console.log(error)
      if(error.response.data.messege){
        const notify = (msg) => toast.error(`${msg}`);
        notify(error.response.data.messege)
      }else{
        const notify = (msg) => toast.error(`${msg}`);
        notify("Something went Wrong")
      }
    })

    }
    
    return (
        <div className="flex font-poppins items-center justify-center">
        <div className="grid gap-8">
          <div
            id="back-div"
            className="bg-gradient-to-r from-green-500 to-green-200 rounded-[26px] m-4 "
          >
            <div
              className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
            >
              <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                Login
              </h1>
              <form 
              onSubmit={
                (e)=>{
                  e.preventDefault();
                  handleClick(e);
                }
              }
              className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                    id="email"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    id="password"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                type='submit'
                  className="bg-gradient-to-r from-green-500 to-green-200 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-green-500 hover:to-green-200 transition duration-300 ease-in-out"
                >
                  LOGIN
                </button>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3>
                  <span className="cursor-default dark:text-gray-300">Dont have an account?</span>
                    <span
                      className="text-green-400 bg-left-bottom ml-1 bg-gradient-to-r from-green-400 to-green-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                     <Link to="/SignUp" > Sign Up</Link>
                    </span>
                  
                </h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
}

export default Login