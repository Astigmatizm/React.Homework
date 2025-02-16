import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); 
  const [editingIndex, setEditingIndex] = useState(null);

  function addTodo(task) {
    setTodos([...todos, { text: task, done: false }]); 
  }

  function updateTodo(task) {
    setTodos(
      todos.map((todo, index) =>
        index === editingIndex ? { ...todo, text: task } : todo
      )
    );
    setEditingIndex(null);
  }

  function editTodo(index) {
    setEditingIndex(index);
  }

  function toggleTask(index) {
    setTodos(
      todos.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="div-main">
      <h1>To-Do List</h1>
      <div className="div-input">
        {editingIndex === null ? (
          <TodoInput onSave={addTodo} />
        ) : (
          <TodoInput
            task={todos[editingIndex].text}
            isEditing={true}
            onSave={updateTodo}
            onCancel={() => setEditingIndex(null)}
          />
        )}
      </div>

      {todos.length > 0 && (
        <div className="div-list">
          <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTask} onToggle={toggleTask} />
        </div>
      )}
    </div>
  );
}

export default App;
