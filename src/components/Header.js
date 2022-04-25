import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip';
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Box sx={{ position:'fixed', width:'600px', zIndex:'999'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span style={{floaf: 'left'}}>
              Todo-App
            </span>
              {
                location.pathname !== '/' && (
                  <Tooltip title="Go back" cursor>
                    <IconButton 
                    sx={{float:'right', padding:'5px 0', margin:'0', color: 'white'}}
                    aria-label="delete" 
                    size="large"
                    onClick={() => { navigate('/') }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                )
              }
              
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header