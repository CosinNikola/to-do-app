import React from 'react'
import './Task.css'
export default function Task(props) {

    const handleDelete = () => {
        props.onDelete(props.task.id);
    }

  return (
    <div className="task">
        <p>{props.task.body}</p>
        <i className="material-icons icon" onClick={handleDelete}>remove_circle_outline</i>
    </div>
  )
}
