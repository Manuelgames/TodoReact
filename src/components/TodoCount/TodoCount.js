import './TodoCount.css';

function TodoCount({ total, completed }) {

  return (
    <h1 onChange={(event) =>
      completed === total ? event.target.value = 'Felicidades has completado tus tareas' : event.target.value = `Tareas completadas ${completed} de ${total}`
    }>
      Tareas completadas {completed} de {total}
    </h1>
  );
}


export { TodoCount };
