import React, { useEffect,useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import DashBoardProduct from '../DashBoardProduct/DashBoardProduct'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const [userId, setUserId] = useState(null);
  const [myProduct, setMyProduct] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const [search,setSearch]=useState("")



  const handleClick = ()=>{
    navigate('/AddProduct')
  }


  //Fucntion to extract user ID from jwt token so only products uploaded by specific user will be listed on dashboard
  useEffect(() => {
    try {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decoded = jwtDecode(token);
        setUserId(decoded?._id);
      }
    } catch (err) {
      console.error('Invalid token:', err);
    }
  }, []); 


  //Function to search product for that specific user

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://exommerce-backend-api.vercel.app/auth/userProducts/${userId}`)
        .then((res) => {
          setMyProduct(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching user products:', err);
          setIsLoading(false);
        });
    }
  }, [userId]); 


  // user try to access dashboard without JWT Token it will ask for login first
  
  if (!userId) {
    return <h1 className='text-center my-6' >Please Login to Access DashBoard</h1>;
  }

  if (isLoading) {
    return <div className='w-full h-96 flex items-center justify-center'>
      
    <h1 className='text-center text-3xl animate-spin delay-75' > <svg className="text-green-700 w-14 h-14"
    xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="12" y1="2" x2="12" y2="6" />  <line x1="12" y1="18" x2="12" y2="22" />  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />  <line x1="2" y1="12" x2="6" y2="12" />  <line x1="18" y1="12" x2="22" y2="12" />  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg></h1>
    
    </div>;
  }

  return (
    <>

    <div className='my-6 flex w-full justify-center items-center' >
      <input 
      className="border dark:border-gray-700 p-1 shadow-md placeholder:text-base border-gray-300 rounded-lg 1/4 md:w-1/6 focus:scale-105 ease-in-out duration-300 mx-2"
      placeholder='Search'
      onChange={(e)=>setSearch(e.target.value)}
      type="text" />
      

      <button
      className="my-2 bg-green-500 text-white text-sm p-1 px-2 rounded"
      onClick={handleClick}
      >Add item</button>
    </div>

    {userId===null?<h1>Please Login</h1>:
    
    
    <div className="w-full flex justify-center items-center" >
        <table className="table-auto" >
            <thead className="p-2  text-left  border-y-2" >
                <tr className="h-20 w-38" >
                  <th className="px-4 md:w-48 " >Product</th>
                  <th className="px-4 md:w-96 " >Category</th>
                  <th className="px-4 md:w-48  " >Price</th>
                  <th className="px-4" >Edit</th>
                </tr>
              </thead>
              <tbody className="p-2" >
                  {
                    //Filter the produtcs based on search 
                    myProduct.filter((items)=>{ 
                      return search.toLowerCase()===''?items:items.category.toLowerCase().includes(search)
                    }).map((item,index)=>(
                      <DashBoardProduct
                      key={index}
                      itemDetail={item}
                      image={item.image}
                      title={item.category}
                      price={item.price}
                      itemId={item._id}
                      />
                    ))
                  }
              </tbody>
        </table>
    </div>
    
    }

    
    </>
  )
}

export default Dashboard