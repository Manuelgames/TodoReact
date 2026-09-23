import { createContext, useState } from 'react';
import { useLocalStorage } from '../CustomHooks/useLocalStorage';

const defaultsTodos = [
    { id: 1, text: 'Cortar Cebolla', completed: false },
    { id: 2, text: 'Estudiar', completed: false },
    { id: 3, text: 'Desayunar sda dasda', completed: true },
    { id: 4, text: 'Comer', completed: true },
    { id: 5, text: 'Cenar', completed: true },
    { id: 6, text: 'Cenar', completed: true }
];

const AppContext = createContext();

function AppProvider({ children }) {
    const {
        item: todos,
        saveItem: guardarTodo,
        cargando,
        cargandoError
    } =
        useLocalStorage('TODOS_V1', defaultsTodos);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    //obtiene todos los valores del arreglo 'todos', de manera que los filtra para ver si son verdaderos (true), sin embargo obtiene el valor en forma de array, por lo que aplicamos .length para tener solo la magnitud de posiciones, asi como tambien con la doble negacion forzamos en caso de que los valores sean de otro tipo de dato a que se conviertan en booleanos.
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const addTodo = (newTask) => {
        const nuevasTareas = [...todos];
        nuevasTareas.push({
            id: nuevasTareas.length + 1,
            text: newTask,
            completed: false
        });
        guardarTodo(nuevasTareas);
    };
    const completarTodo = (id) => {
        const tareaCompletada =
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        guardarTodo(tareaCompletada);
    };
    const eliminarTodo = (id) => {
        const tareasRestantes = todos.filter((todo) => todo.id !== id);
        guardarTodo(tareasRestantes);
    };


    return (
        <AppContext.Provider value={{
            cargando,
            cargandoError,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            addTodo,
            todos,
            completarTodo,
            eliminarTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </AppContext.Provider>
    );
}


export { AppContext, AppProvider }