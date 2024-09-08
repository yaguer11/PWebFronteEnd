import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";
import { name } from "./data/DataDefault";

function App() {
  const [newTask, setNewTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { text: newTask, completed: false };
      setTasks([newTaskObj, ...tasks]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (tasksToDelete) => {
    setTasks(tasks.filter((task) => task !== tasksToDelete));
  };

  const handleToggleTask = (taskToToggle) => {
    setTasks(
      tasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="contenedor">
      <Header
        name={name}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            completed={task.completed}
            onDelete={() => handleDeleteTask(task)}
            onToggle={() => handleToggleTask(task)}
          />
        ))
      )}
    </div>
  );
}

export default App;
