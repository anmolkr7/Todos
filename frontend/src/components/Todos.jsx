export function Todos({todos=[]}){
    return (
        <div>
            {
                todos.map(function(todo){
                    return(
                        <div key={todo._id}>
                            <h3>{todo.title}</h3>
                            <h3>{todo.description}</h3>
                            <button>{todo.completed==true ? "Coompleted":"Mark as Complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}