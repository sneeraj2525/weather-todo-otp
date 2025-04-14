import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { FcOk } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';

const TodoList = ({todos, setInput,setIsEditing,setEditIndex,setTodos}) => {

// Edit todo
const startEditTodo=(index)=>{
setIsEditing(true);
setEditIndex(index);
setInput(todos[index])
}

// delete todo

const deleteTodo=(index)=>{
if (index !== null) {
let delTodo = todos.filter((data, i) => i !== index) ;
setTodos(delTodo)
}
}

const clearTodos=()=>{
  setTodos([]);
}


return (
<div>
  {
  todos.map((todo , index) => (
  <div className='d-flex todo-add justify-content-between align-items-center' key={index}>
    <input className='mb-0 input-bg text-white' type='text' value={todo} onChange={(e)=> setInput(e.preventDefault())}
    />
    <div className='del-edit'>
      
      <button className='mx-2 del-edit-btn' onClick={()=>startEditTodo(index)} >
        <FiEdit />
      </button>
      <button className='mx-2 del-edit-btn' onClick={()=>deleteTodo(index)} >
        <AiFillDelete />
      </button>
    </div>
  </div>
  ))
  }
  {todos.length > 0 && (
      <div>
        <button type='submit' onClick={clearTodos} className='clr-btn' >Clear All</button>
      </div>
    )}
    
</div>
)
}

export default TodoList