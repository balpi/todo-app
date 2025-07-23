

export default function TodoCard({ todo,onRemove }) {

    const removeCard = () => {
        console.log("Remove card clicked"); // Placeholder for remove functionality
        onRemove({todo});
    };

   
    
  return (
    <div className="card col-3 m-5">
    <div className="card-body">
      <h2 className="card-title justify-content-between">{todo.title}</h2>
      <p className="card-text p-2">{todo.description}</p>
      <span className={`status ${todo.completed ? 'completed' : 'pending'}`}>
        {todo.completed ? 'Completed' : 'Pending'}
      </span>
      <div className="row mt-2">
        <button onClick={removeCard} className="btn btn-primary">Remove</button>
      </div>
    </div>
    </div>
  );
}