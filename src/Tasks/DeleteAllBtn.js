import React from 'react'
import './DeleteAllBtn.css'
export default function DeleteAllBtn(props) {
    const handleDeleteAll = () => {
        props.onDeleteAll();
    }
  return (
        <button className="button" onClick={handleDeleteAll} >Delete All Tasks</button>
  )
}
