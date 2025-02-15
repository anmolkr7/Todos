import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'
import axios from "axios"
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos") // Replace with actual API URL
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);
  return (
    <div>
        <CreateTodo setTodos={setTodos}></CreateTodo>
        <Todos todos={todos}></Todos>
    </div>
  )
}
export default App
