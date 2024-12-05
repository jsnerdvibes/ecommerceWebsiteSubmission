import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
function Home() {

    let [products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);



    //get request to server for product details

    useEffect(()=>{

        axios("https://exommerce-backend-api.vercel.app/auth/products")
        .then((res)=>{
            setProducts(res.data.data)
            setIsLoading(false);
        }).catch((error)=>{
          console.log(error)
          setIsLoading(false);
        })

    },[])

    //loading screen until data is received from the server

    if (isLoading) {
      return <div className='w-full h-96 flex items-center justify-center'>
      
      <h1 className='text-center text-3xl animate-spin delay-75' > <svg className="text-green-700 w-14 h-14"
      xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="12" y1="2" x2="12" y2="6" />  <line x1="12" y1="18" x2="12" y2="22" />  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />  <line x1="2" y1="12" x2="6" y2="12" />  <line x1="18" y1="12" x2="22" y2="12" />  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg></h1>
      
      </div>;
    }


  return (
    <>
    <div className="text-center" >
    <h1>Our Top Rated Products</h1>
    </div>
  
    <div className="flex flex-wrap justify-center">

    {
        products.map((item,index)=>
          //iterating through products array and passing items properties one by one
           ( <ProductCard 
            key={index}
            itemDetail={item}
            img={`${item.image}`} 
            title={item.title} 
            price={item.price}
            category={item.category}
            rating={item.rating}
            description={item.description}
            />
        ))
    }
    </div>
    
    </>
  )
}

export default Home