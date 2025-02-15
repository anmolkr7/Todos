import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'
import axios from "axios"
function App() {
  const [todos, setTodos] = useState([])
   // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
          // Fetching todos from an API endpoint (localhost here)
        const response = await axios.get("http://localhost:3000/todos") // Replace with actual API URL
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();// Call the function to fetch todos
  }, []);// Empty dependency array means this effect runs only once when the component mounts
  //The empty dependency array ([]) means this effect runs only once, when the component mounts.
  //This ensures that the API call to fetch todos is made only when the component first appears on the screen.
  return (
    <div>
       {/* Render the CreateTodo component for creating new todos and passing down setTodos as a prop */}
        <CreateTodo setTodos={setTodos}></CreateTodo>
       {/* Render the Todos component to display the list of todos */}
        <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}
export default App
