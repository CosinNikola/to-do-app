import './App.css';
import {useState} from 'react';
import Container from './UI/Container';
import axios from 'axios';
function App() {

  
  let DEFAULT_TASKS = [
    {id: 1, body: 'Eat'},
    {id: 2, body: 'Sleep'},
    {id: 3, body: 'Repeat'},
  ];

  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  
  const handleTaskSend = (task) => {
    let newTasks = (prevTasks) => {
      return [task, ...prevTasks];
    }
    setTasks(newTasks);
    axios.post('http://localhost:3000/tasks', task)
    .then(res => console.log(res))

  }

  const handleDelete = (id) => {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const handleDeleteAll = () => {
    setTasks([]);
  }

  return (
    <div className="App">
      <Container tasks={tasks} onTaskSend={handleTaskSend} onDelete={handleDelete} onDeleteAll={handleDeleteAll}/>
    </div>
  );
}

export default App;
