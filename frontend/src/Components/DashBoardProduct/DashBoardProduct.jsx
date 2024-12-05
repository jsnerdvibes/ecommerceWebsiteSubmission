import React from 'react'
import { useNavigate } from 'react-router-dom'


//basic jsx page for listing data on dashboard (data for tbody section)

function DashBoardProduct(props) {

    const navigate = useNavigate()

    const item = props.itemDetail

    const editItem=()=>{
        navigate("/editItem",{state:{item}})
    }

    const deleteItem=()=>{
        navigate(`/deleteItem`,{state:{item}})
    }





    return (
        <>
            <tr className="border-y-2" >
                <td className="p-4" ><img
                    className="h-16 w-16"
                    src={`${props.image}`} alt="" /></td>
                <td className="p-4" >{props.title}</td>
                <td className="p-4" >${props.price}</td>
                <td className="p-4 w-40" >
                    <button
                    onClick={editItem}
                    className='mx-2'
                    > <svg className="text-themeColor-700 w-6 h-6 rotate-[45deg]"
                    xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 24 24"  strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg></button>
                    <button
                    onClick={deleteItem}
                    className='mx-1'
                    > <svg className="text-red-700 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg" width="24"  height="24"   viewBox="0 0 20 20" fill="currentColor">  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/></svg></button>
                </td>
            </tr>
        </>
    )
}

export default DashBoardProduct