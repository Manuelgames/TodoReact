import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AppContext } from '../../context';

function CreateTodoButton({value}) {
    const {setOpenModal} = useContext(AppContext) 
    
    return (
        <Button
         onClick={()=>{
            setOpenModal(true);
        }}
         sx={{ height: '50px',backgroundColor: 'white',color: 'black', border: '1px solid black' }}>
            {value}
        </Button>
    );
}

export { CreateTodoButton };
