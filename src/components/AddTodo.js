import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const AddTodo = ({addTodo}) => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitTodo = (e) => {
        e.preventDefault()

        addTodo({name, date, description})
        setOpen(false);
    }
    
  return (
    <div>
        <IconButton sx={{marginLeft: '77%', hover:'none', backgroundColor: '#0055b3', position: 'fixed', top: '600px'}} onClick={handleClickOpen}  aria-label="delete" size="large">
            <AddIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{width:'99%', margin:'auto'}}
        >
            <DialogTitle id="alert-dialog-title">
                {"Add Todo"}
            </DialogTitle>
            <Box sx={{width:'90%',  margin:'auto'}}>
                <TextField sx={{width:'100%', mb:'10px'}} label="Todo Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField sx={{width:'100%', mb:'10px'}} label="Todo Date" variant="outlined" value={date} onChange={(e) => setDate(e.target.value)}/>
                <TextField
                sx={{width:'100%', mb:'5px'}}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                
                <Button sx={{margin:'10px 0', float:'right'}} onClick={submitTodo} variant="contained">
                    Add Todo
                </Button>
                <Button sx={{margin:'10px', float:'right', color:'red'}} onClick={handleClose} variant="plain">
                    Cancel
                </Button>
            </Box>
        </Dialog>
  </div>
  )
}

export default AddTodo