import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import API from '../../util/axios';
function TodoItem({item,edit}) {
  // const [complete,setComplete] = useState(false)
  const deleteTodo =async (id) =>{
    try {
     const data =  await API.delete(`/todo/${id}`)
      console.log('delete successful',id);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  const isComplete = async (id) =>{
    try{
      await API.patch(`/todo/${id}`)
      console.log('complete successful')
      window.location.reload()
    }
    catch(error) {
      console.log(error);
    }
  }
  const updateRank = async (id,rank) =>{
    try {
     const data = await API.patch(`/todo/rank/${id}`,{rank})
   
     console.log(data)
     window.location.reload()

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='bg-gray-200 my-2 py-4 mx-4 rounded-2xl '>
        <div className='flex items-center text-2xl'>
       <div className='flex pl-4' onClick={()=>isComplete(item._id)}>{item.isComplete===false? <RiCheckboxBlankCircleLine />:<RiCheckboxCircleLine />} </div>
       <p className='flex flex-1 justify-center'>{item.name}</p>
       <div className='flex px-2'>
        <div className={`h-5 w-5  rounded-full border border-solid border-red-700 mx-1 shadow-md ${item.rank==='red'&&'bg-red-700'}`} onClick={()=>updateRank(item._id,'red')}></div>
        <div className={`h-5 w-5  rounded-full border border-solid border-yellow-500 mx-1 shadow-md ${item.rank==='yellow'&&'bg-yellow-500'}`} onClick={()=>updateRank(item._id,'yellow')}></div>
        <div className={`h-5 w-5  rounded-full border border-solid border-green-700 mx-1 shadow-md  ${item.rank==='green'&&'bg-green-700'}`} onClick={()=>updateRank(item._id,'green')}></div>
       </div>
        <div className='flex mr-4'>
        <CiEdit className='mx-2' onClick={()=>edit(item._id)} /> <MdDelete onClick={()=>deleteTodo(item._id)} /></div>
        </div>
    </div>
  )
}

export default TodoItem