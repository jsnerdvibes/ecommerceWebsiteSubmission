import {React,useEffect,useState} from 'react'
import { toast } from 'react-toastify'

function ProductCard(props) {

  const [showModal, setShowModal] = useState(false);


  useEffect(()=>{

    if(showModal){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };

  },[showModal])


  const handleClick = ()=>{
    const jwtInfo = localStorage.getItem('jwt')

    
    
    if(jwtInfo===null){
      const notify = (msg) => toast.error(`${msg}`);
      notify("Please Login to Buy Item")
    }
  }

  // reusable element to show product details by dynamically passing the properties

  return (
    <>
    <div className="p-4 mx-1 w-44 shadow-xl flex flex-col justify-between rounded-xl hover:scale-105 duration-300 ">
        <img 
        className="h-auto my-2"
        src={`${props.img}`} alt="" />

        <span
        className="my-2"
        onClick={()=>setShowModal(true)}
        >{props.title} <button className="text-indigo-600 text-sm" >Know more</button></span>

    <div className="flex items-center justify-between">
        <span className="text-sm">Price :${props.price}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Category :{props.category}</span>
      </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Rating : {props.rating}</span>
        <button
        onClick={handleClick}
        className="my-2 bg-green-500 text-white text-sm py-1 px-2 rounded"
        >Buy Now</button>
      </div>
      </div>

 {/* Modal for Product Details */}
 {showModal && (
        <div className="bg-gray-100 dark:bg-gray-800 py-4 absolute top-20 z-10">
          <button
          onClick={()=>setShowModal(false)}
          className='absolute text-white right-4 top-2'
          >x</button>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="md:h-[460px] md:w-full md:flex md:justify-center md:items-center rounded-lg md:bg-gray-700 mb-4 h-1/2 w-1/2 ">
                        <img className="md:w-auto h-full object-cover" src={`${props.img}`} alt="Product Image" />
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{props.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Category : {props.category}
                    </p>
                    <div className="flex mb-2">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 dark:text-gray-300"> ${props.price}</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                           {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )}

    </>
  )
}

export default ProductCard