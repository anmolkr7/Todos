import { useState } from "react"
import axios  from "axios"
export function CreateTodo({setTodos}){
    const [title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const addTodo = async () => {
        if (!title || !description) {
          alert("Title and Description are required!");
          return;
        }
    
        try {
          const response = await axios.post("http://localhost:3000/todos", {
            title,
            description,
          });
          setTodos((prevTodos) => [...prevTodos, response.data]); // Update UI
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
