import React, {useContext, useEffect, useState } from 'react';
import TodoForm from './components/todoform';
import TodoCard from './components/todocard';
import {ThemeContext} from './components/theme';


export default function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Yeni todo ekleyen fonksiyon (App.js'de tanımlı)
  const handleAddTodo = ({ title, description }) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleString(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  return (
    
      
    
      <div className="App container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>TO‑DO‑APP by Serhat</h1>
        {/* Tema düğmesi */}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      {/* Burada prop adını `onAddTodo` diye geçiyoruz */}
      <TodoForm todos={todos} onAddTodo={handleAddTodo} />

      <div className="row mt-4">
        {todos.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onToggle={() =>
              setTodos(prev =>
                prev.map(t =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              )
            }
            onRemove={() =>
              setTodos(prev => prev.filter(t => t.id !== todo.id))
            }
          />
        ))}
      </div>
    </div>

  );
}
