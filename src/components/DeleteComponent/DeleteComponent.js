import { TodoIcon } from '../TodoIcon/TodoIcon'
// Componente para las acciones del icono delete en las tareas generadas

function DeleteComponent({onClick, className}) {
    return (
        <TodoIcon
            type='delete'
            onClick = {onClick}
            className = {className}
        ></TodoIcon>
    )
}


export { DeleteComponent }

