import { TodoCount } from './components/TodoCount/TodoCount';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import Typography from '@mui/material/Typography';
import { useState } from 'react'

const defaultsTodos = [
  { id: 1, text: 'Cortar Cebolla', completed: false },
  { id: 2, text: 'Estudiar', completed: false },
  { id: 3, text: 'Desayunar sda dasda', completed: true },
  { id: 4, text: 'Comer', completed: true },
  { id: 5, text: 'Cenar', completed: true },
  { id: 6, text: 'Cenar', completed: true }
];


function App() {
  const [todos, setTodos] = useState(defaultsTodos);
  const [searchValue, setSearchValue] = useState('');
  const eliminarTodo = (id) => {
    setTodos((todosActuales) =>
      todosActuales.filter((todo) => todo.id !== id)
    );
  };
  //obtiene todos los valores del arreglo 'todos', de manera que los filtra para ver si son verdaderos (true), sin embargo obtiene el valor en forma de array, por lo que aplicamos .length para tener solo la magnitud de posiciones, asi como tambien con la doble negacion forzamos en caso de que los valores sean de otro tipo de dato a que se conviertan en booleanos.
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <main>
      <TodoCount sx={{ margin: '0 0 10px 0' }} completed={completedTodos} total={totalTodos} />

      <Card variant="elevation" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: { xs: 'calc(100% - 32px)', md: 800 },
        maxWidth: '900px',
        backgroundColor: '#d7f9db',
        border: '1px solid black',
      }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <DesignServicesRoundedIcon />
          <Typography>Anota la siguiente tarea</Typography>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sx={{
              height: {
                xs: '40px',
                sm: '70px'
              },
              width: 'calc(100% - 8px)',
              margin: '30px 0',
            }} />
          <CardContent sx={{
            display: 'flex', justifyContent: 'space-around', width: {
              xs: 'Calc(100% - 10px)',
              sm: '100%'
            },
            padding: '0'
          }}>
            <CreateTodoButton sx={{
              width: {
                xs: '44px',
                sm: '80px'
              },
              padding: 'none',
              fontSize: '19px'
            }} value={'Crear Tarea'} />
          </CardContent>
        </CardContent>


        <CardContent sx={{
          margin: '0 auto',
          width: {
            xs: 'calc(100% - 20px)',
            sm: 'calc(70% - 40px)'
          },

          padding: {
            xs: '10px',
            md: '32px'
          }
        }}>
          <TodoList sx={{
            height: '200px',
            overflowY: 'auto',
            msOverflowStyle: 'none', // Internet Explorer
            scrollbarWidth: 'none',  // Firefox
            '&::-webkit-scrollbar': {
              display: 'none',       // Chrome, Edge y Safari
            },
            margin: '0 auto'
          }}>

            {
              todos.filter((todo) =>
                todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((todo) => (
                  <TodoItem
                    onDelete={eliminarTodo}
                    key={todo.id}
                    id={todo.id}
                    tareaContador={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                  />
                ))
            }

          </TodoList>
        </CardContent>

      </Card>
    </main >
  );
}

export default App;
