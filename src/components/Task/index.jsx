import InputCheck from "../InputCheck";
import LabelTask from "../LabelTask";
import ButtonDelete from "../ButtonDelete";

/* eslint-disable react/prop-types */
function Task({ text, onDelete, completed, onToggle }) {
  return (
    <div className="contenedor-tarea">
      <InputCheck checked={completed} onChange={onToggle} />
      <LabelTask text={text} completed={completed} />
      <ButtonDelete onClick={onDelete} />
    </div>
  );
}

export default Task;
