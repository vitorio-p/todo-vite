import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput("");
    console.log(tasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const markDone = (index) => {
    const currentTasks = document.getElementsByClassName("task");
    const doneTask = currentTasks[index];
    if (doneTask.style.textDecoration !== "line-through") {
      doneTask.style.textDecoration = "line-through";
    } else {
      doneTask.style.textDecoration = "none";
    }
  };

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          name="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        {taskInput != 0 && <button onClick={addTask}>Add</button>}
      </div>
      <div>
        <h1>Current notes</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task">
              <button onClick={() => markDone(index)}>Mark as done</button>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
