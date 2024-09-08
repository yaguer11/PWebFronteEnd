/* eslint-disable react/prop-types */
function ButtonDelete({ onClick }) {
  return (
    <button className="boton-icono" onClick={onClick}>
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
}

export default ButtonDelete;
