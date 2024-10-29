import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

  const addTodo = (todo: any) => {
    const newTodos = [
      ...todos,
      { ...todo, id: new Date().getTime().toString() },
    ];
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Todo List</h2>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex align-items-center">
          <input
            className="form-control me-2"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            placeholder="Enter Todo"
          />
          <button
            className="btn btn-success me-2"
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
          >
            Add
          </button>
          <button
            className="btn btn-warning"
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
          >
            Update
          </button>
        </li>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{todo.title}</span>
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={() => setTodo(todo)}
                id="wd-set-todo-click"
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
