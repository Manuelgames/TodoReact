import Box from '@mui/material/Box';

function TodoList({ children, sx }) {
  return (
    <Box
      component="ul"
      sx={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export { TodoList };