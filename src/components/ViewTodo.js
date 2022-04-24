import {Box,  } from "@mui/system"
import Card from "@mui/material/Card"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Tooltip from '@mui/material/Tooltip';

const ViewTodo = () => {
  return (
    
  <Card sx={{
        height: 'auto',
        width: '95%',
        margin: '75px auto',
        boxShadow: 0.1,
        borderRadius: 0
    }}>
        <CardContent>
            <Typography variant="body2">
                Event 
            </Typography>
            <Typography variant="h5" component="div" olor="text.secondary" gutterBottom>
                Word of the Day
                <Tooltip title="View Todo" followCursor>
                    <IconButton sx={{float: 'right', color: 'green'}}aria-label="delete" size="small">
                        <ViewDayIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <hr sx={{borderBottom:'0px'}}/>
            </Typography>
            <Typography variant="body2">
                Date 
            </Typography>
            <Typography variant="body1">
                1990 September 17th.
            </Typography>
            <Typography sx={{mt:'20px'}} variant="body2">
                Description 
            </Typography>
            <Typography variant="body1">
                This is an event that is happening on 1990 September 17th.
                I'm celebrating this with my friends
            </Typography>
        </CardContent>
    </Card>
  )
}

export default ViewTodo