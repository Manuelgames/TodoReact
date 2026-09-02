import Button from '@mui/material/Button';


function CreateTodoButton({value}) {
    return (
        <Button
         onClick={(event)=>{
            console.log(event.target);
         }}
         sx={{ height: '50px',backgroundColor: 'white',color: 'black', border: '1px solid black' }}>
            {value}
        </Button>
    );
}

export { CreateTodoButton };
