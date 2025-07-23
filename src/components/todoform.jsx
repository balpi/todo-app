import React, { useState } from 'react';

export default function TodoForm({ todos, onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;

    // App.js handleAddTodo
    onAddTodo({ title: title.trim(), description: description.trim() });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="row g-2 align-items-center">
     <div className='col-6'>
      <div className="row">
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        </div>
      </div>
      <div className="mt-3 ">
        <div className="col-10">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        </div>
      </div>
      </div>
      <div className="col-6">
        <div className="row">
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </div>
      <div className='row'>
      <div className="col-12">
        <h2> You have  {todos.length} duty</h2>
      </div>
      </div>
      </div>
    </form>
  );
}
