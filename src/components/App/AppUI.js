import { TodoCount } from '../TodoCount/TodoCount';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../context';
import { useContext } from 'react';
import { Modal } from '../Modal/index';
function AppUI() {
    const { cargando,
        cargandoError,
        searchValue,
        setSearchValue,
        todos,
        completarTodo,
        eliminarTodo,
        openModal,
    } = useContext(AppContext);

    return (
        <main>
            <TodoCount sx={{ margin: '0 0 10px 0' }} />

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
                        {/* generaremos componentes para que se visualicen de manera mas practica */}
                        {cargando && <TodoLoading />}
                        {cargandoError && <TodoError />}
                        {!cargando && todos.length === 0 && <p>No hay tareas existentes</p>}

                        {
                            !cargando &&
                            todos.filter((todo) =>
                                todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((todo) => (
                                    <TodoItem
                                        onCompleted={completarTodo}
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
            {openModal && (
                <Modal>
                </Modal>
            )
            }
        </main >
    )
}



export { AppUI }