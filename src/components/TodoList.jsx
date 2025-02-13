import React from 'react'

function TodoList({todos, onEdit}){ 

  
    return(
        <>
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                     {todo}  
                     <button onClick={() => onEdit(index)}>
                        Edit
                     </button>
                </li>
                ))}
            </ul>
        </>
    );
}
export default TodoList;