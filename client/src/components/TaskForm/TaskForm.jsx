import React from 'react'
import { Form, Formik } from 'formik';
import { useTasks } from '../../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export const TaskForm = () => {

  const { createTask , getTask , updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  useEffect(()=>{
    const loadTask = async () => {
      if(params.id){
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description
        })
      }
    };
    loadTask();
  }, [])

  
  return (
    <div >


      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) =>{
          if(params.id){
            await updateTask(params.id, values)
            navigate("/");
          }else{
            await createTask(values);
            navigate("/");
          }
          setTask({
            title: "",
            description: ""
          })
        }}
      >
        { ({handleChange, handleSubmit, values, isSubmitting}) =>(
          <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
            <h1 className='text-xl font-bold uppercase text-center'>
              {
              params.id ? "Edit task" : "Create task"
              }
            </h1>
            <label className='block font-bold'>Title</label>
            <input 
              type="text" 
              name="title" 
              placeholder='Title' 
              onChange={handleChange} 
              value={values.title}
              className="px-2 py-2 rounded-sm w-full"
            />

            <label className='block font-bold'>Description</label>
            <textarea 
            name="description"
            rows="3"
            placeholder='Write a description'
            onChange={handleChange}
            value={values.description}
            className="px-2 py-2 rounded-sm w-full"
            ></textarea>

            <button className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md' type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
          )
        }
      </Formik>
    </div>
  )
}
