import React from 'react'

import './TodoList.css'

function TodoList({ todos, onEdit, onDelete, onToggle }) {
    return (
      <>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => onToggle(index)} 
              />
              <span className={todo.done ? "completed" : ""}>{todo.text}</span>
              <button onClick={() => onEdit(index)} className="button-textEdit">
                Edit
              </button>
              <button onClick={() => onDelete(index)} className="button-textDelete">Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default TodoList;
  