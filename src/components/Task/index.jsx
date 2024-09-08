import InputCheck from "../InputCheck";
import LabelTask from "../LabelTask";
import ButtonDelete from "../ButtonDelete";

/* eslint-disable react/prop-types */
function Task({ text }) {
  return (
    <div className="contenedor-tarea">
      <InputCheck />
      <LabelTask text={text} />
      <ButtonDelete />
    </div>
  );
}

export default Task;
