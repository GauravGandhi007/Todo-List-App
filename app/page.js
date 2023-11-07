"use client"
import React, { useState } from 'react'


const page = () => {

  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTask([...mainTask, {task, desc}])
    setTask("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler =(i)=>{
   let copyTask = [...mainTask]
   copyTask.splice(i,1)
   setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-white text-center'>No Task Available</h2>

  if (mainTask.length > 0){
    renderTask = mainTask.map((t, i) =>{
      return (
        <li key={i} className='flex items-center justify-between m-3'>
          <div className='flex justify-between p-3 my-3 w-2/3 hover:shadow-xl hover:shadow-slate-900'>
            <h5 className='text-3xl font-semibold'>{t.task}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}

           className='bg-red-400 hover:bg-red-700 text-white px-4 py-1 rounded font-bold'>Delete</button>
        </li>
      )
    })
  
  }
  return (
    <>
    <h1 className='text-center text-5xl text-white bg-black p-3 font-bold'>My Todo List...</h1>   

    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter task here' className='text-2xl border-2 border-zinc-400 rounded m-5 px-4 py-2' value={task} onChange={(e)=>{
        setTask(e.target.value)
      }}/>
      <input type='text' placeholder='Enter description here' className='text-2xl border-2 border-zinc-400 rounded m-5 px-4 py-2' value={desc} onChange={(e)=>{
         setDesc(e.target.value)
      }}/>
      <button className='bg-black text-white text-2xl border-2 rounded m-5 px-4 py-2 '>Add</button>
    </form>
    <hr/>
    <div className='bg-slate-400 m-5 px-4 py-2 '>
      <ul>
      {renderTask}
      </ul>
       
    </div>
    </>
  )
}

export default page
