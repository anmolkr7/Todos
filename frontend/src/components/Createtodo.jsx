import { useState } from "react"
import axios  from "axios"
export function CreateTodo({setTodos}){
     // State variables to manage user input for title and description
    const [title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const addTodo = async () => {
         // Validation: Prevent adding empty todos
        if (!title || !description) {
          alert("Title and Description are required!");
          return;
        }
          // Sending a POST request to add a new todo to the backend
        try {
          const response = await axios.post("http://localhost:3000/todos", {
            title,
            description,
          });
          // Updating the todos list in the parent component by adding the new todo
          setTodos((prevTodos) => [...prevTodos, response.data]); // Update UI
          // Clearing the input fields after successfully adding the todo
          setTitle(""); // Clear inputs
          setDescription("");
        } catch (error) {
          console.error("Error adding todo:", error);
        }
    }
    return(
        <div>
            <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/>
            <input type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}/> <br/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}
