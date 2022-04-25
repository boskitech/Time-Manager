import './App.css';
import Header from './components/Header'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router';

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
      <Outlet/>
      </Box>
    </div>
  );
}

export default App;
