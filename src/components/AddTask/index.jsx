import InputText from "../InputText";
import ButtonAdd from "../ButtonAdd";

/* eslint-disable react/prop-types */
function AddTask({ newTask, setNewTask, handleAddTask }) {
  return (
    <div className="contenedor-entrada">
      <InputText value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <ButtonAdd onClick={handleAddTask} />
    </div>
  );
}

export default AddTask;
