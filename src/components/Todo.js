import Card from "@mui/material/Card"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Tooltip from '@mui/material/Tooltip';

const Todo = () => {
  return (
        <Card sx={{
            height: '100px',
            width: '95%',
            margin: '15px auto',
            boxShadow: 2,
        }}>
            <CardContent>
                <Typography variant="h5" component="div" olor="text.secondary" gutterBottom>
                    Word of the Day
                    <Tooltip title="View Todo" followCursor>
                        <IconButton sx={{float: 'right', color: 'green'}}aria-label="delete" size="small">
                            <ViewDayIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <Typography variant="body2">
                    1990 September 17th.
                    <Tooltip title="Delete" followCursor>
                        <IconButton sx={{float: 'right', color:'red'}}aria-label="delete" size="small">
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Todo