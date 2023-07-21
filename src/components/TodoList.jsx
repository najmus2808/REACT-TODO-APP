import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const { text } = todo;

    if (!text) {
      return;
    }

    const isTodoAlreadyAdded = todos.some(
      (item) => item?.text?.trim().toLowerCase() === text?.trim()?.toLowerCase()
    );

    if (isTodoAlreadyAdded) {
      return alert("Todo already added");
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo propsObj={{ todos, completeTodo, removeTodo }} />
    </>
  );
}

export default TodoList;
