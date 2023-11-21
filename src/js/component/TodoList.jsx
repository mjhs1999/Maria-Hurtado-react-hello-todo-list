import React, {useState} from "react";

function TodoList () {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputvalue] = useState(" ")
//here sets the change when adding a todo
    function handleChange(e){
        setInputvalue(e.target.value)
    }
// The funmction that allows a submit
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,inputValue])
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      }
//Here it shows how the todo list is represented in the Browser
    return(
        <div>
            <h1> What are the task for today?</h1>
            <form> 
                <input type = "text"  value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Add a Task </button>
            </form>
            <ul>
            {todos.map((todo) => (
          <li key={todo}>{todo}
           <button onClick={handleDelete}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    )
}
export default TodoList;