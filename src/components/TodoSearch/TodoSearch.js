import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function TodoSearch( { searchValue, setSearchValue, sx }) {
  
  return (
    <TextField
      label="Buscar tarea"
      placeholder="Cortar cebolla"
      fullWidth
      //quiere decir que si searchValue tiene un valor lo utiliza, si no usa el vacio ''
      value={searchValue ?? ''}
      sx={sx}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      slotProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export { TodoSearch };