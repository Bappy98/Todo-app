import React, { useEffect, useState } from "react";
import InputField from "./component/InputField";
import TodoList from "./component/TodoList";
import API from "../util/axios";

function App() {
  const [data,setData] = useState([])
  const [editing,setEditing] = useState(false)
  const [id,setId] = useState([])
  const getData = async () => {
    try {
      const todo = await API.get('/todo');
      setData(todo.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  useEffect(() => {
    getData();
    // window.location.reload();
  }, []);
  
 
  return (
    <div>
      <div className="h-[800px] w-[700px] bg-zinc-500  m-auto mt-24 rounded-3xl">
        <InputField id={id}  setEditing={setEditing} editing={editing} />
        <TodoList data={data} setEditing={setEditing} setId={setId}/>
      </div>
    </div>
  );
}

export default App;
