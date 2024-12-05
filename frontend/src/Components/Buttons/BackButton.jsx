import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {

    const navigate = useNavigate()

const handleClick = ()=>{
    navigate('/DashBoard')
}


  return (
    <button
    onClick={handleClick}
    className="my-2 mx-2 bg-gray-900 text-white text-sm py-1 px-2 rounded relative top-1 left-5 z-10"
    >back</button>
  )
}

export default BackButton