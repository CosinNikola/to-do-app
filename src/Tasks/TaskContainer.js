import React from 'react'
import './TaskContainer.css'
import Task from './Task'
export default function TaskContainer(props) {

    const handleDelete = (id) => {
        props.onDelete(id);
    }

  return (
    <div className='task-container'>
        {props.tasks.map(task => <Task task={task} key={task.id} onDelete={handleDelete}/>)}
    </div>
  )
}
