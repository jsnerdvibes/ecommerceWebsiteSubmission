import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginButton() {

    const navigate = useNavigate()

const handleClick = ()=>{
    navigate('/Login')
}

  return (
    <button
    onClick={handleClick}
    className="my-2 mx-2 bg-green-500 text-white text-sm py-1 px-2 rounded"
    >Login</button>
    //as
  )
}

export default LoginButton