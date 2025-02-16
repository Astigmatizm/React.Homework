import React, { useState, createContext, useContext } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const addTodo = (task) => {
        setTodos([...todos, { text: task, done: false }]);
    };

    const updateTodo = (task) => {
        setTodos(
            todos.map((todo, index) => (index === editingIndex ? { ...todo, text: task } : todo))
        );
        setEditingIndex(null);
    };

    const editTodo = (index) => {
        setEditingIndex(index);
    };

    const toggleTask = (index) => {
        setTodos(
            todos.map((todo, i) => (i === index ? { ...todo, done: !todo.done } : todo))
        );
    };

    const deleteTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, editTodo, toggleTask, deleteTask, editingIndex, setEditingIndex }}>
            {children}
        </TodoContext.Provider>
    );
};

const TodoInput = () => {
    const { addTodo, updateTodo, editingIndex, setEditingIndex } = useContext(TodoContext);
    const [task, setTask] = useState('');

    const handleSubmit = () => {
        if (editingIndex !== null) {
            updateTodo(task);
        } else {
            addTodo(task);
        }
        setTask('');
    };

    return (
        <div>
            <input 
                type='text' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder='сюда писать надо' 
            />
            <button onClick={handleSubmit}>{editingIndex !== null ? 'Обновить' : 'Добавить'}</button>
            {editingIndex !== null && <button onClick={() => setEditingIndex(null)}>Cancel</button>}
        </div>
    );
};

const TodoList = () => {
    const { todos, editTodo, toggleTask, deleteTask } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} className={todo.done ? 'completed' : ''}>
                    <input type='checkbox' checked={todo.done} onChange={() => toggleTask(index)} />
                    <span>{todo.text}</span>
                    <button onClick={() => editTodo(index)}>Edit</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

const App = () => {
    return (
        <TodoProvider>
            <div>
                <h1>To-Do List</h1>
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
