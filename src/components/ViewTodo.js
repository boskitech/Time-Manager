import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
// import { getTodos } from './data';
import { useEffect, useState } from "react";

const ViewTodo = () => {
    let params = useParams()
    let id = parseInt(params.id)
    //   let todos = getTodos()
    //   const todo = todos.find(todo => todo.id === id)

    const[todo, setTodos] = useState([])

    const fetchTodo = async () => {
        const res = await fetch(`http://localhost:5000/todos/${id}`)
        const data = await res.json()

        setTodos(data)
    }

    useEffect(() => {
        fetchTodo()
    })

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
                {todo.name}
                <hr sx={{borderBottom:'0px'}}/>
            </Typography>
            <Typography variant="body2">
                Date 
            </Typography>
            <Typography variant="body1">
                {todo.date}
            </Typography>
            <Typography sx={{mt:'20px'}} variant="body2">
                Description 
            </Typography>
            <Typography variant="body1">
                {todo.description}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default ViewTodo