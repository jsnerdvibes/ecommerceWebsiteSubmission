import axios from 'axios';
import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackButton from '../Buttons/BackButton';

function DeleteItem() {

  const location = useLocation() //access the current location object with state passed via navigation 
  const navigate = useNavigate()

  const {item} = location.state  //destructure the variable in state

  console.log(item)

  const handleClick = ()=>{

    axios.delete('https://exommerce-backend-api.vercel.app/auth/deleteProduct',{
      data: { _id: item._id },//deleting the item using item it
  })
    .then((res)=>{
      const notify = (msg) => toast.error(`${msg}`);
      notify(res.data.messege)
      navigate('/Dashboard')
    })
    .catch((error)=>{
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

                <h1 className='text-white'>You sure to delete this item ?</h1>

                <div className='flex flex-col text-white' >

                  <span className='my-2'>Title :{item.title}</span>
                  <span className='my-2'>Description : {item.description}</span>
                  <span className='my-2'>Price : {item.price}</span>
                  <span className='my-2'>Rating : {item.rating}</span>
                  <span className='my-2'>{item.title}</span>

                </div>

                <button
                onClick={handleClick}
                className="my-2 mx-2 bg-red-500 text-white text-sm py-1 px-2 rounded"
                >Delete</button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default DeleteItem