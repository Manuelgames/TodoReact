import { createPortal } from "react-dom";
import './modal.css'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AppContext } from "../../context";
import { useContext, useState } from "react";


function Modal({ children }) {
    const { setOpenModal, addTodo } = useContext(AppContext);
    const [newTask, setNewTask] = useState('');

    const onSaveTask = () => {
        addTodo(newTask);
        setNewTask("");
        setOpenModal(false);

    };
    const onChangeTask = (event) => {
        setNewTask(event.target.value);
    };
    return createPortal(
        <Box className="modal" sx={{
            position: 'fixed',
            display: 'flex',
            zIndex: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            flexDirection: 'column',
            alignItems: 'flex-end',
            backgroundColor: 'rgb(121, 152, 198)',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            borderRadius: {
                xs: '8px',
                sm: '10px',
                md: '12px',
            },
            fontSize: '62.5%',
            width: {
                xs: 'calc(100vw - 24px)',
                sm: 'min(80vw, 560px)',
                md: '600px',
                lg: '680px',
            },
            height: {
                xs: 'min(560px, calc(100dvh - 24px))',
                sm: 'min(600px, calc(100dvh - 48px))',
                md: 'min(620px, calc(100dvh - 64px))',
            },
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflowY: 'auto',
            padding: {
                xs: '12px',
                sm: '20px',
                md: '24px',
            },
        }}>
            <CloseIcon
                onClick={() => {
                    setOpenModal(false);
                }}
                sx={{ width: '50px', height: '50px', marginTop: '20px', color: 'red' }} />

            <div className="modal-content">
                <h2>Agrega una tarea</h2>
                {children}
                <TextField onChange={onChangeTask} className="content-text" placeholder="Comprar leche" sx={{ width: '80%', marginTop: '70px' }}
                    fullWidth
                    slotProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }} />
            </div>
            <Button onClick={onSaveTask} sx={{ width: '200px', height: '50px', backgroundColor: ' rgb(70, 95, 133)', color: 'white', margin: '50px auto' }} variant="text">Guardar tarea</Button>

        </Box>,
        document.getElementById('modal')
    )
}

export { Modal }
