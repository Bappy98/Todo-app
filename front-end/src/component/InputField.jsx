import React, { useEffect, useState } from 'react'
import  API from './../../util/axios'
function InputField({editing,id,setEditing}) {
  const [name,setName] = useState('')
  
  useEffect(() => {
    if (editing && id) {
      setName(id.name);
    }
  }, [editing, id]);
  const postData = async (data) => {
    try {
      await API.post('/todo', { name:data },
      {
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log('successful');
      setName(''); // Assuming `setName` is a state setter function
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  const updateData =async (id,todo) =>{
    try {
      await API.patch(`/todo/edit/${id}`,{name:todo})
      setName(''); // Assuming `setName` is a state setter function
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  
  const handelSubmit = (e) => {
    e.preventDefault();
    if(editing&&id) {
      updateData(id._id,name)
      setEditing(false)
    }
    else {

      postData(name);
    }
  }
  
  return (
    <div className='flex justify-center'>
      <div>
       <form action="" className='mt-8' onSubmit={handelSubmit}>
       <input type='text' className='m-4 p-4 w-[400px]' placeholder='Enter task' value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
       <button className='bg-gray-500 p-4 w-24 font-bold rounded-lg'>submit</button>
       </form>
      </div>
    </div>
  )
}

export default InputField