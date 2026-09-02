import './TodoCount.css';


function TodoCount({ total, completed }) {
  return (
    <h1>
      Tareas completadas {completed} de {total} 
    </h1>
  );
}


export { TodoCount };
