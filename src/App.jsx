import "./App.css";

function App() {
  const nombre = "GERMÁN ADRIÁN MUÑOZ";

  return (
    <div className="contenedor">
      <header>
        <div className="texto-encabezado">
          <p>LISTA DE TAREAS DE {nombre}</p>
        </div>
      </header>
      <div className="contenedor-entrada">
        <input type="text" placeholder="NUEVA TAREA"></input>
        <button>Agregar</button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Lavar auto
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Instalar alacena
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Colgar espejo
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Devolver llave porton
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Arreglar estante
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="contenedor-tarea">
        <label>
          <input type="checkbox"></input>
          Mandar mail espado inicial
        </label>
        <button className="boton-icono">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default App;
