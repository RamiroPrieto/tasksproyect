import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { NotFound } from './components/NotFound/NotFound'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskPage } from './components/TaskPage/TaskPage'
import { TaskContextProvider } from './context/TaskContext'

function App(){
  return (
    <div className='bg-zinc-900 h-screen'>
      <NavBar/>
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path='/' element={<TaskPage/>}/>
            <Route path='/new' element={<TaskForm/>}/>
            <Route path='/edit/:id' element={<TaskForm/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App;
