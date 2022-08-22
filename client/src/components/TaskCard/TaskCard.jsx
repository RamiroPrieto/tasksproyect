import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext'

export const TaskCard = ({ task }) => {

    const navigate = useNavigate()
    const { deleteTask , toggleTaskDone } = useTasks();

    const handleDone = async () =>{
        await toggleTaskDone(task.id);
    }

    return (
        <div key={task.id} className="bg-slate-700 text-white rounded-md p-4">
            <header className='flex justify-between'>
                <h2 className='font-bold text-xl'>{task.title}</h2>
                <span>{task.done == 1 ? "✔️" : "❌"}</span>
            </header>
            <p className='text-xs'>{task.description}</p>
            <span>{task.createAt}</span>
            <div className='flex gap-2'>
                <button className='bg-slate-300 px-2 py-1 text-black' onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
                <button className='bg-slate-300 px-2 py-1 text-black' onClick={() => navigate(`/edit/${task.id}`)}>
                    Edit
                </button>
                <button className='bg-slate-300 px-2 py-1 text-black' onClick={() => handleDone()}>
                    Toggle task
                </button>
            </div>
        </div>
    )
}
