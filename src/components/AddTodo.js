import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const AddTodo = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
      
    <div>
        <IconButton sx={{marginLeft: '480px', backgroundColor: '#0055b3', position: 'fixed', top: '600px'}} onClick={handleClickOpen}  aria-label="delete" size="large">
            <AddIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{width:'450px', margin:'auto'}}
        >
            <DialogTitle id="alert-dialog-title">
                {"Add Todo"}
            </DialogTitle>
            <Box sx={{width:'90%',  margin:'auto'}}>
                <TextField sx={{width:'100%', mb:'10px'}} label="Todo Name" variant="outlined" />
                <TextField sx={{width:'100%', mb:'10px'}} id="outlined-basic" label="Todo Date" variant="outlined" />
                <TextField
                sx={{width:'100%', mb:'5px'}}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                />
                
                <Button sx={{margin:'10px 0', float:'right'}} onClick={handleClose} variant="contained">
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