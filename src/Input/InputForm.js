import React, { useState } from 'react'
import './InputForm.css'
export default function InputForm(props) {

  const [taskBody, setTaskBody] = useState('');

  const inputTaskBody = (e) => {
    setTaskBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskBody !== ''){
    const newTask = {
      body: taskBody
    }
    setTaskBody('');
    props.onTaskSubmit(newTask);
  }
  }

  return (
    <form className='input-container' onSubmit={handleSubmit}>
        <input type='text' className='input-field' value={taskBody} onChange={inputTaskBody}/>
        <button type='submit' className='input-button'>Add Task</button>
    </form>
  )
}
