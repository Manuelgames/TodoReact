import './TodoCount.css';
import { useContext } from 'react';
import { AppContext } from '../../context';

function TodoCount() {
  const {totalTodos, completedTodos} = useContext(AppContext);

  return (
    <h1 onChange={(event) =>
      completedTodos === totalTodos ? event.target.value = 'Felicidades has completado tus tareas' : event.target.value = `Tareas completadas ${completedTodos} de ${totalTodos}`
    }>
      Tareas completadas {completedTodos} de {totalTodos}
    </h1>
  );
}


export { TodoCount };
