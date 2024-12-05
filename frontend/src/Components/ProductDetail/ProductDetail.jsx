import {React,useState} from 'react'
import BackButton from '../Buttons/BackButton'


function ProductDetail(props) {

  const [showModal, setShowModal] = useState(true);


  return (
    <>
        {""&&
        <div className="bg-gray-100 dark:bg-gray-800 py-8 absolute top-20 z-10">
          <button
          onClick={()=>setShowModal(false)}
          className='absolute text-white right-4 top-2'
          >x</button>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover" src={`${props.img}`} alt="Product Image" />
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{props.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Category : {props.category}
                    </p>
                    <div className="flex mb-4">
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
}

    
    </>
  )
}

export default ProductDetail