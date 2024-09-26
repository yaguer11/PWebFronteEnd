import { useState, useEffect } from "react";
import styles from "../src/styles/App.module.scss";
import Header from "../src/components/Header";
import AddTask from "../src/components/AddTask";
import Task from "../src/components/Task";

function App() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.body.className =
      theme === "light" ? styles.lightTheme : styles.darkTheme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div
      className={`${styles.contenedor} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <AddTask onAddTask={addTask} theme={theme} />
      <hr
        className={`${styles.divider} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      />
      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              texto={task.text}
              completed={task.completed}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => toggleTaskCompletion(task.id)}
              theme={theme}
            />
          ))
        ) : (
          <p
            className={`${styles.emptyMessage} ${
              theme === "light" ? styles.lightTheme : styles.darkTheme
            }`}
          >
            No hay tareas por mostrar
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
