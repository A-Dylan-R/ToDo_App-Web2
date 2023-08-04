import { useState } from 'react';

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const AddToDo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const DeleteToDo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const EditToDo = (index, updatedTodo) => {
    if (updatedTodo === null || updatedTodo === '') {
      return;
    }

    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };


  return (
    <main className="p-8">
      <div className="max-w-md mx-auto bg-white rounded p-4 shadow">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded mb-4"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new ToDo"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={AddToDo}
        >
          Add
        </button>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2 border-b"
            >
              <span>{todo}</span>
              <div>
                <button
                  className="text-yellow-500 mr-2"
                  onClick={() => EditToDo(index, prompt('Edit Todo', todo))}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => DeleteToDo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
