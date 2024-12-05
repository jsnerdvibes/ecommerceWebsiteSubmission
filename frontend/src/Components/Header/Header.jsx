import {React,useState,useEffect} from 'react'
import { NavLink,useNavigate,useLocation } from 'react-router-dom'
import SignupButton from '../Buttons/SignupButton'
import LogoutButton from '../Buttons/LogoutButton'
import LoginButton from '../Buttons/LoginButton'


function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const [isAuthenticate,setIsAuthenticate] = useState(localStorage.getItem('jwt'))

  useEffect(() => {
    if (location.state !== null) {
      setIsAuthenticate(location.state);
    }
  }, [location.state]);

  const handleLogin=()=>{
    navigate('/Login')
  }

  const handleLogout = ()=>{
    localStorage.removeItem('jwt')
    setIsAuthenticate(null);
    navigate('/Home')
    
  }
  

  return (
    <>
    <div className="h-auto w-full flex flex-col justify-evenly items-center" >
    
    <div className='w-full  flex justify-evenly items-center bg-gray-300 h-24 ' >

    <span className="text-3xl" >Company Name</span>
    
    {isAuthenticate===null?<button
    onClick={handleLogin}
    className="my-2 mx-2 bg-green-500 text-white text-lg px-2 rounded h-8 w-20 hover:scale-105 "
    >Login</button>:<button
    onClick={handleLogout}
    className="my-2 bg-red-500 text-white text-lg px-2 rounded h-8 w-20 hover:scale-105"
    >Logout</button>}
    </div>
    <nav className="flex list-none bg-white w-1/2 md:w-1/4 justify-evenly my-6">
      <li 
      className="">
        <NavLink 
        className={({isActive})=>isActive?"text-red-800":"bg-white"}
        to="/Home" >Home</NavLink></li>

      <li className="">
        <NavLink 
        className={({isActive})=>isActive?"text-red-800":"bg-white"}to="/Dashboard" >Dashboard</NavLink></li>
    </nav>

  </div>
    </>
  )
}

export default Header