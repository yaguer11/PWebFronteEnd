import { useState } from "react";
import styles from "../../styles/AddTask.module.scss";

/* eslint-disable react/prop-types */
function AddTask({ onAddTask, theme }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div
      className={`${styles.contenedorEntrada} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className={`${styles.input} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        placeholder="Nueva tarea..."
      />
      <button
        onClick={handleAddTask}
        className={`${styles.botonAgregar} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        <span className="material-symbols-outlined">check</span>
      </button>
    </div>
  );
}

export default AddTask;
