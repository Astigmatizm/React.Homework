import React, {useState} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'


function App() {

  const [todos, setTodos] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  

  function addTodo(task){

      setTodos([...todos, task])

  }

  function updateTodo(task){

      setTodos(

        todos.map((todo, index) => (index === editingIndex ? task : todo))

      );

      setEditingIndex(null);
  }

  function editTodo(index){
    setEditingIndex(index)

  }
 
  return(
    <div className='div-main'>
        <h1>To-Do List</h1>
      <div className='div-input'>
        {editingIndex === null ? (
        <TodoInput onSave={addTodo} />
          ) : (
        <TodoInput
          task={todos[editingIndex]}
          isEditing={true}
          onSave={updateTodo}
          onCancel={() => setEditingIndex(null)}
        />)}
      </div>

      {todos.length > 0 && (
        <div className='div-list'>
          <TodoList todos={todos} onEdit={editTodo} />
        </div>
      )}
    </div>
  );

}
export default App;