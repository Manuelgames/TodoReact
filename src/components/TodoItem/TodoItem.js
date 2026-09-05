import './TodoItem.css'
import {CheckComponent} from '../CheckComponent/CheckComponent';

function TodoItem({ id, completed, text, tareaContador, onCompleted, onDelete }) {
    return (
        <li className='container--items'>
            {/* pregunta que de los valores de props en completed, los que sean true, se les va asignar tambien una clase --active la cual generara que cambie de color a verde de que se completo */}
            {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={() => {
                onCompleted(id)
            }}>V</span> */}

            <CheckComponent />
            <p>Tarea {tareaContador}</p>
            <p sx={{
                width: {
                    xs: '140px',
                    md: '300px'
                }

            }} className={`TodoItem-p ${completed && 'TodoItem-p--active'}`}>{text}</p>
            <span className='delete-task' onClick={() => {
                onDelete(id)
            }}>X</span>
        </li>
    );
}


export { TodoItem };
