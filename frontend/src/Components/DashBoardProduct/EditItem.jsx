import axios from 'axios'
import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import BackButton from '../Buttons/BackButton'

function EditItem() {

  const location = useLocation()//access the current location object with state passed
  const {item} = location.state //destructure the variable in state

  const [title,setTitle]=useState(item.title)
  const [price,setPrice]=useState(item.price)
  const [description,setDescription]=useState(item.description)
  const [category,setCategory]=useState("Category")
  const [image,setImage]=useState(item.image)
  const navigate = useNavigate()

    
  const handleClick =()=>{

      const jwtToken = localStorage.getItem('jwt');//extract jwt Token
        const id = Math.floor(Math.random()*20)//random id to the product
        const rating = Math.floor(Math.random()*5)//random rating to the product
        const decoded = jwtDecode(jwtToken);//decode jwt token
        const email = decoded.email;//extract email from decoded token
        const userId = decoded._id; //extract userId from decoded token

        const newItem = {
            _id:item._id,
            id:id,
            title:title,
            price:price,
            description:description,
            category:category,
            image:image,
            rating:rating,
            userId:userId
        }

        const product = newItem //place item in the form fo schema to update the data

    
    axios.post('https://exommerce-backend-api.vercel.app/auth/updateProduct',{jwtToken,email,product})
    .then((res)=>{
      const notify = (msg) => toast.success(`${msg}`);
                notify(res.data.message)
                navigate('/Dashboard')
    })
    .catch((error)=>{
      const notify = (msg) => toast.error(`${msg}`);
      notify("SOmething went Wrong")
      console.log(error)


  })


  }
   


  return (
    <>
    <div className="flex font-poppins items-center justify-center">
      

        <div className="grid gap-8">
          
          <div
            id="back-div"
            className="bg-gradient-to-r from-green-500 to-green-200 rounded-[26px] m-4 "
          ><BackButton />
            <div
              className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
            >
               
              <h1 className="pb-6 font-bold text-2xl dark:text-gray-400 text-center cursor-default">
             
                Product Details
              </h1>
              <div className="space-y-4">

                <h1 className='text-white'>Update Values</h1>

                <div className='flex flex-col text-white' >

                  
                  <input 
                  type="text" 
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 my-2"
                  />

                  <input 
                  type="number" 
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                  className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 my-2"
                  />

                  <input 
                  type="text" 
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 my-2"
                  />

                  <input 
                  type="text" 
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 my-2"
                  />

<input 
                  type="text" 
                  value={image}
                  onChange={(e)=>setImage(e.target.value)}
                  className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300 my-2"
                  />
                  

                </div>

                <button
                onClick={handleClick}
                className="my-2 mx-2 bg-green-500 text-white text-sm py-1 px-2 rounded"
                >Update</button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default EditItem