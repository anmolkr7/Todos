import axios from "axios";
export function Todos({todos=[],setTodos}){
    const markAsComplete = async(id) => {
          // ✅ Update UI immediately
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo._id === id ? { ...todo, completed: true } : todo
            )
        );
        try 
        {
            console.log("Sending request to mark as complete:", id); // ✅ Log request
            const response = await axios.put("http://localhost:3000/completed", { id });
            console.log("Marked complete:", response.data);
        } catch (error) {
            console.error("Error marking todo as complete:", error.response?.data || error.message);
        }
    };
    return (
        <div>
            {
                todos.map(function(todo){
                    return(
                        <div key={todo._id}>
                            <h3>{todo.title}</h3>
                            <h3>{todo.description}</h3>
                            <button onClick={() => markAsComplete(todo._id)} 
                        disabled={todo.completed}>{todo.completed==true ? "Completed":"Mark as Complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}