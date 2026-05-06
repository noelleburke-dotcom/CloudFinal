import { useState } from "react";
import "./App.css";
import Task from "./components/Task"
import InputTask from "./components/InputTask"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Finish homework', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1>My ToDo List</h1>
      <InputTask 
        placeholder="Add a new task..." 
        onAddTask={addTask}
      />
      <ul className="task-list">
        {tasks.map((task) => (
          <Task 
            key={task.id}
            text={task.text} 
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
