import './App.css';
import Header from './components/Header'
import Box from '@mui/material/Box'
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Box sx= {{
        margin: 'auto',
        width: '550px',
        marginTop:'30px',
        height: '650px',
        boxShadow: 5,
        overflow: 'auto'
      }}>
        <Header />
        <Todos />
      </Box>
    </div>
  );
}

export default App;
