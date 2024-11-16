import { useState } from "react";
import styles from "../../styles/Task.module.scss";

/* eslint-disable react/prop-types */
function Task({ texto, completed, onDelete, onToggle, theme }) {
  const [mensaje, setMensaje] = useState();

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(""), 2000);
  };

  const handleCopy = (texto) => {
    navigator.clipboard.writeText(texto).then(
      () => {
        mostrarMensaje("Texto copiado al portapapeles");
      },
      () => {
        mostrarMensaje("Error al copiar el texto");
      }
    );
  };

  const handleShare = (texto) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Tarea para compartir",
          text: texto,
        })
        .then(() => {
          mostrarMensaje("Tarea compartida con éxito");
        })
        .catch((error) => {
          mostrarMensaje("Error al compartir la tarea");
          console.error("Error al compartir:", error);
        });
    } else {
      mostrarMensaje("El navegador no soporta la funcionalidad de compartir");
    }
  };

  return (
    <div
      className={`${styles.contenedorTarea} ${
        completed ? styles.completada : ""
      } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className={`${styles.checkbox} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      />
      <span
        className={`${styles.textoTarea} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        {texto}
      </span>
      <button
        className={`${styles.botonesTask} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        onClick={() => handleShare(texto)}
      >
        <span className="material-symbols-outlined">share</span>
      </button>
      <button
        className={`${styles.botonesTask} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
        onClick={() => handleCopy(texto)}
      >
        <span className="material-symbols-outlined">content_paste</span>
      </button>
      <button
        onClick={onDelete}
        className={`${styles.botonesTask} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
      {mensaje && (
        <div
          className={`${styles.mensaje} ${
            theme === "light" ? styles.lightTheme : styles.darkTheme
          }`}
        >
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default Task;
