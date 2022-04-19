import React from 'react'
import './Container.css'
import InputForm from '../Input/InputForm'
import TaskContainer from '../Tasks/TaskContainer'
import DeleteAllBtn from '../Tasks/DeleteAllBtn'
export default function Container(props) {
    const handleTaskSubmit = (task) => {
       props.onTaskSend(task);
    }

    const handleDelete = (id) => {
        props.onDelete(id);
    }

    const handleDeleteAll = () => {
        props.onDeleteAll();
    }


  return (
    <div className="container">
        <h1>To Do List</h1>
        <InputForm  onTaskSubmit={handleTaskSubmit}/>
        {props.tasks.length > 0 ? <TaskContainer tasks={props.tasks} onDelete={handleDelete}/> : null}        
        <DeleteAllBtn onDeleteAll={handleDeleteAll}/>
    </div>
  )
}
