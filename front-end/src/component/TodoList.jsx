import React from 'react'
import TodoItem from './TodoItem'
import API from '../../util/axios';

function TodoList({data,setEditing,setId}) {
  const edit = (id) =>{
    console.log(id);
    setEditing(true)
    const obj = data.find((o)=>o._id===id)
    setId(obj)
    console.log(obj);
  }
 
  return (
    <div className='h-[600px] w-full bg-slate-500 mt-10 overflow-auto'>
    {data.map((item,i)=>(
      <TodoItem item={item} key={i} edit={edit}/>
    ))}
    </div>
  )
}

export default TodoList