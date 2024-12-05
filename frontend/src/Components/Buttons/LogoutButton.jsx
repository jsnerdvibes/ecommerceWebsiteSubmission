import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
    const navigate = useNavigate()
    const handleClick=()=>{
        localStorage.removeItem('jwt')
        navigate('/Home')
      }
    

  return (
    <button
    onClick={handleClick}
    className="my-2 bg-green-500 text-white text-sm py-1 px-2 rounded"
    >Logout</button>
  )
}

export default LogoutButton