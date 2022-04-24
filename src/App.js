import './App.css';
import Header from './components/Header'
import Box from '@mui/material/Box'
import Todos from './components/Todos';
import ViewTodo from './components/ViewTodo';

function App() {
  return (
    <div className="App">
      <Box sx= {{
        margin: 'auto',
        width: '95%',
        marginTop:'30px',
        height: '650px',
        boxShadow: 5,
        overflow: 'auto'
      }}>
        <Header />
        <ViewTodo />
      </Box>
    </div>
  );
}

export default App;
