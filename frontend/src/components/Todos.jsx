import axios from "axios";
// Todos component receives 'todos' (defaulting to an empty array) and 'setTodos' to update state
export function Todos({todos=[],setTodos}){
     // Function to mark a todo as complete
    const markAsComplete = async(id) => {
          // ✅ Update UI immediately
          /*
         1.setTodos Updates State
            setTodos is the state setter function (from useState in the parent component).
            It updates the todos list by modifying the completed status of a specific todo.
         2.prevTodos.map() Creates a New Updated Array
            prevTodos represents the current list of todos before the update.
            map() is used to create a new array by looping over each todo:
            If the todo._id matches the id passed to markAsComplete, it creates a new todo object with { ...todo, completed: true }.
            If it doesn’t match, it returns the existing todo unchanged.
          */
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