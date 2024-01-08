import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';


 let counter =  1;

export default function List () {
  const[todo, setTodo] = useState('');
  const[todos, setTodos] = useState([]);
  let items = todos.length;


  const hanldeChange = (evt) => {
        setTodo(evt.target.value)
  }

    
  // Add item
  const handleClick = async() => {
    if(input.value === ''){
      alert("Missing Data")
    }else {
      const newTodo = {
        id:  counter++,
        done: false,
        label: todo
      }
      const newTodos = [...todos, newTodo]
      await fetch('https://playground.4geeks.com/apis/fake/todos/user/Camilo', {
        method: "PUT",
        body: JSON.stringify(newTodos),
        headers: {
          "Content-Type": "application/json"
        }
      })
      setTodos(newTodos)
  }
           
}
    
        
    // Delete action & alert message for delete task
      const handleFilter = (todoId) => async() => {
      alert ("Did you complete this Task?")
      //setTodos(todos.filter((_, todoId) => todoId !== data.id))
      const newTodos = todos.map((data) => {
        if(todoId === data.id){
          return{
            ...data,
            done: true
          }
        }
        return data
      })
          const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/Camilo', {
            method: "PUT",
            body: JSON.stringify(newTodos),
            headers: {
              "Content-Type": "application/json"
            }
          })
          const data = await res.json()
          console.log(data)
          setTodos(newTodos)
   }


   //Delete all Items from the list
   const clearAll = async() => {
    setTodos(prev => [])


          const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/Camilo', {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          })
          const data = await res.json();
          console.log(data);
      
      requestDeleteAll ()
   
   }

    useEffect(() => {
            const requestPost = async () =>  {
                const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/Camilo', {
                  method: "POST",
                  body: JSON.stringify([]),
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                const data = await res.json();
                console.log(data);
            }
            requestPost ()
    }, [] )  


    useEffect(() => {
      const getDb = async () =>  {
          const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/Camilo')
          const data = await res.json()
          
          setTodos(data)
      }
      getDb()
}, [] )  



  return(
      <div className="justify-content-center">
            <h1 id="tittle">To Do List!</h1>
            <input id="input" onChange={hanldeChange} value={todo} />
            <Button variant="primary" id="addBtn" onClick={handleClick}>Add</Button>
            <ListGroup>
              
              <div>
                {todos.map((data) => 
                <div>
                  <ListGroup.Item key={data.id} style={{textDecoration: data.done ? "line-through" : "none"}} >{data.label}
                  <CloseButton id="closeBtn" onClick={handleFilter(data.id)} />
                  </ListGroup.Item>
                </div>)}
              </div>
              <div id="itemsQuantity">
                <p>{items +" item left"}</p>
              </div>
            </ListGroup>
            <Button variant="danger"  onClick={clearAll}>Clear All</Button>
      
          
      </div>
  );
}