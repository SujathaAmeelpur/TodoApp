import React, {useState, useEffect} from 'react';

function TodoApp(){
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/todos")
    .then(res => res.json())
    .then(data => setTodos(data));
  },[]);

  const addTodo = ()=> {
    fetch("http://localhost:5000/todos", {
        method: 'POST',
        body: JSON.stringify({text}),
    })
    .then(res => res.json())
    .then(data => setTodos([...todos, data]));

    setText("");
  };

  return (
    <div>
        <h1>Todo App</h1>
        <input type = "text" value = {text} onChange = {(e)=> setText(e.target.value)}  />
        <button onClick = {addTodo}>Add</button>

        <ul>
            {todos.map(todo => <li key = {todo.id} >{todo.text}</li>)}
        </ul>
    </div>
  );
}

export default TodoApp;