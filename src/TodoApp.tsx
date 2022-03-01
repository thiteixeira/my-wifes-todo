import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { TodosProvider } from './context/TodosContext';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const customTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
});

function TodoApp() {
  return (
    <Paper>
      <ThemeProvider theme={customTheme}>
        <AppBar position="static" style={{ height: '4rem' }}>
          <Toolbar>
            <Typography>My Wife's To Do App</Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={10} md={9} lg={8} style={{ margin: '1rem 0' }}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
