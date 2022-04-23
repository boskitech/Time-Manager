import { Box } from '@mui/system'
import Todo from './Todo'
import AddTodo from './AddTodo';

const Todos = () => {
    

  return (
    <Box className="todo" sx={{mt: '80px'}}>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <AddTodo/>
    </Box>
  )
}

export default Todos