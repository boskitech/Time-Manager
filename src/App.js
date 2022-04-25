import './App.css';
import Header from './components/Header'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router';

function App() {
  
  return (
    <div className="App">
      <Box sx= {{
        margin: 'auto',
        width: '30%',
        marginTop:'25px',
        height: '700px',
        boxShadow: 5,
        overflow: 'auto'
      }}>
        <Header />
      <Outlet/>
      </Box>
    </div>
  );
}

export default App;
