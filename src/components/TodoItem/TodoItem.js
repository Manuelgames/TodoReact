import './TodoItem.css'
import { CheckComponent } from '../CheckComponent/CheckComponent';
import { DeleteComponent } from '../DeleteComponent/DeleteComponent';

function TodoItem({ id, completed, text, tareaContador, onCompleted, onDelete }) {
    return (
        <li className='container--items'>
            <CheckComponent
                onClick={() => onCompleted(id)}
                className={completed ? 'Icon-check--active' : 'Icon-check--inactive'}
            />
            <p>Tarea {tareaContador}</p>
            <p sx={{
                width: {
                    xs: '140px',
                    md: '300px'
                }

            }} className={`TodoItem-p ${completed && 'TodoItem-p--active'}`}>{text}</p>
            <DeleteComponent
                className='delete-task'
                onClick={() => onDelete(id)}
            />
        </li>
    );
}


export { TodoItem };
