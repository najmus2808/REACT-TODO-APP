import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

const Todo = ({ propsObj }) => {
  const { todos, completeTodo, removeTodo } = propsObj;

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <div className="icons">
        {todo.isComplete ? (
          <AiFillCheckCircle
            onClick={() => completeTodo(todo.id)}
            className="completed-icon"
          />
        ) : (
          <AiOutlineCheckCircle
            onClick={() => completeTodo(todo.id)}
            className="complete-icon"
          />
        )}
      </div>
      <div className="text">{todo.text}</div>
      <div className="icons">
        <BsFillTrashFill
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
