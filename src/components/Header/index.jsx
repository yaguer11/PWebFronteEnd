import Title from "../Title";
import AddTask from "../AddTask";

/* eslint-disable react/prop-types */
function Header({ name, newTask, setNewTask, handleAddTask }) {
  return (
    <div>
      <Title name={name} />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    </div>
  );
}

export default Header;
