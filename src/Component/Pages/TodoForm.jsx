import React, { useState } from "react";
import TodoList from "./TodoList";
const TodoForm = () => {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
const [isEditing , setIsEditing] = useState(false);
const [editIndex , setEditIndex] =  useState(null)



// For Adding Todo List
  const addTodo = () => {
      if (input.trim()) {
          setTodos([...todos , input ]);   
          setInput('');  // Clear input field
      }
  };

//edit btn
const saveEditTodo=()=>{
    if (input.trim() && editIndex !== null) {
          let updateTodo = todos.map((todo,ind) => (
                  ind === editIndex ? input : todo
            ))
            setTodos(updateTodo);
            setIsEditing(false);
            setEditIndex(null);
            setInput('')
    }
}

  return (
    <div>
      <div className="app-box">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {
            !isEditing ? <button className="input-group-text" onClick={addTodo}> Add </button> : 
            <button className="input-group-text" onClick={saveEditTodo}> Save </button>
          }
        </div>
      </div>
      <TodoList todos={todos} setTodos={setTodos} setInput={setInput} setIsEditing={setIsEditing} setEditIndex={setEditIndex}  />
    </div>
  );
};

export default TodoForm;
