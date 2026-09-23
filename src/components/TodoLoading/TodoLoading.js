import './TodoLoading.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function TodoLoading() {
    return (
        <Box className={'container-loading'} >
            <CircularProgress aria-label="Loading…" />
            <p>Cargando tareas</p>
        </Box>
    );
}



export { TodoLoading }