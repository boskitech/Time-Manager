import Card from "@mui/material/Card"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Tooltip from '@mui/material/Tooltip';
const Todo = ({id, name, date, deleteTodo}) => {

    

  return (
        <Card sx={{
            height: '100px',
            width: '95%',
            margin: '15px auto',
            boxShadow: 2,
        }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {name}
                    <Tooltip title="View Todo" followCursor>
                        <Link to={`/todo/${id}`}>
                            <IconButton sx={{float: 'right', color: 'green'}}aria-label="delete" size="small">
                                <ViewDayIcon fontSize="small" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </Typography>
                <Typography variant="body2">
                    {date}
                    <Tooltip title="Delete" followCursor>
                        <IconButton sx={{float: 'right', color:'red'}} onClick={() => deleteTodo(id)} aria-label="delete" size="small">
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Todo