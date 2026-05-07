import { useState } from "react";
import "./App.css";

function App() {
  // ===== Use State Variables =====
  const [tasks, setTasks] = useState([
    {text:"Cloud Final",completed:false},
    {text:"Record Video",completed: false},
    {text:"Study for final", completed: false},
  ]);
  const [inputValue, setInputValue] = useState("");

  // ===== Functions ======
  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      const new_task= {text:inputValue,completed:false}
      setTasks([...tasks, new_task]);
    }
    setInputValue("");
  };
  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };




  // ==== JSX that gets returned =====
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="main-container">
        <div className="task-container">
          <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            
            <span className= {task.completed? "task-text completed":"task-text"}>
              {task.text} </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Done!
            </button>
          </li>
        ))}
      </ul>
    </div>
      <div className="add-container">
        <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
    </div>
  </div>
  );  
}

export default App;