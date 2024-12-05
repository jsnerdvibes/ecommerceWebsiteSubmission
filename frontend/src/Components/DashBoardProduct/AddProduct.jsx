import {React,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { toast } from 'react-toastify';
import BackButton from '../Buttons/BackButton';


function AddProduct() {

    const [title,setTitle]=useState("")
    const [price,setPrice]=useState(null)
    const [description,setDescription]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("")
    const navigate = useNavigate()


    // function to store info from form and send post req to backend
    const handleClick=()=>{

        const jwtToken = localStorage.getItem('jwt'); //extract jwt Token
        const id = Math.floor(Math.random()*20) //random id to the product
        const rating = Math.floor(Math.random()*5)  //random rating to the product
        const decoded = jwtDecode(jwtToken); //decode jwt token
        const email = decoded.email; //extract email from decoded token
        const userId = decoded._id //extract userId from decoded token

        const newItem = {
            id:id,
            title:title,
            price:price,
            description:description,
            category:category,
            image:image,
            rating:rating,
            userId:userId
        }

        const product = newItem //place item in the form fo schema to post the data


        try {
            
            axios.post("https://exommerce-backend-api.vercel.app/auth/addProduct",{jwtToken,email,product})
            .then((res)=>{
                const notify = (msg) => toast.success(`${msg}`);
                notify(res.data.message)
                navigate('/Dashboard')
              
            })
            .catch((error)=>{
                const notify = (msg) => toast.error(`${msg}`);
                notify("SOmething went Wrong")
            })

        } catch (error) {
            const notify = (msg) => toast.error(`${msg}`);
            notify("SOmething went Wrong")
        }
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
              <form 
              onSubmit={
                (e)=>{
                  e.preventDefault();
                  handleClick(e);
                }
              }
              className="space-y-4">
                <div>
                  <input
                  onChange={(e)=>setTitle(e.target.value)}
                    id="title"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="text"
                    placeholder="Title"
                    required
                  />
                </div>
                <div>
                  <input
                  onChange={(e)=>setPrice(e.target.value)}
                    id="Price"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="Number"
                    placeholder="Price"
                    required
                  />
                </div>
                <div>
                  <input
                  onChange={(e)=>setDescription(e.target.value)}
                    id="description"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="text"
                    placeholder="description"
                    required
                  />
                </div>
                <div>
                  <input
                  onChange={(e)=>setCategory(e.target.value)}
                    id="description"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="text"
                    placeholder="Category"
                    required
                  />
                </div>
                <div>
                  <input
                  onChange={(e)=>setImage(e.target.value)}
                    id="image"
                    className="border dark:bg-green-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                    type="text"
                    placeholder="Image Link"
                    required
                  />
                </div>
                <button
                type='submit'
                  className="bg-gradient-to-r from-green-500 to-green-200 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-green-500 hover:to-green-200 transition duration-300 ease-in-out"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default AddProduct