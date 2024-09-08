import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import { name, tasks } from "./data/DataDefault";

function App() {
  return (
    <div className="contenedor">
      <Header name={name} />
      <Task text={tasks[0]} />
      <Task text={tasks[1]} />
      <Task text={tasks[2]} />
      <Task text={tasks[3]} />
      <Task text={tasks[4]} />
      <Task text={tasks[5]} />
    </div>
  );
}

export default App;
