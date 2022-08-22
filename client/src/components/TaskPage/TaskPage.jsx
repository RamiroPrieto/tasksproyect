import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTasks } from '../../context/TaskContext'
import { TaskCard } from '../TaskCard/TaskCard'

export const TaskPage = () => {

  const { tasks, loadTasks } = useTasks()

  useEffect(()=>{
    loadTasks();

  },[])

  function renderMain(){
    if(tasks.length === 0) return "No tasks yet"
    
    return  tasks.map(task =>(<TaskCard task={task} key={task.id}/>))
    
  }

  return (
    <div>
      <h1 className='text-5xl text-white font-bold text-center mb-5' >
        Tasks
      </h1>
      <div className='grid grid-cols-3 gap-2' >

          {renderMain()}
      </div>
    </div>
  )
}
