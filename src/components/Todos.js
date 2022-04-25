import {useState, useEffect} from 'react'
import { Box } from '@mui/system'
import Todo from './Todo'
import AddTodo from './AddTodo';

const Todos = () => {
  const [Todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()
    setTodos(data)
  }


  useEffect(() => {
    fetchTodos()
  }, [])

  async function deleteTodo(id){
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      })
      return setTodos(Todos.filter((Todo) => Todo.id !== id))
  }

  const addTodo = async (todo) => {
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(todo)
    })  

    const data = await res.json()

    setTodos([...Todos, data])
  }

  return (
    <Box className="todo" sx={{mt: '80px'}}>
      {Todos.map((todo, index) => (
        <Todo key={index} id={todo.id} 
              name={todo.name} 
              date={todo.date} 
              desc={todo.description}
              deleteTodo={deleteTodo}
        />
      ))}
      <AddTodo addTodo={addTodo}/>
    </Box>
  )
}

export default Todos