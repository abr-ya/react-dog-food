import { Fragment, useCallback } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi, ITodo } from "../features/todo/todoApi";
import "./todo.css";

const Todo = () => {
  const { data: todos } = todoApi.useGetAllQuery();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();
  const [updateTodo] = todoApi.useUpdateTodoMutation();

  const onToggle = useCallback((todo: ITodo) => updateTodo({ ...todo, done: !todo.done }), [updateTodo]);

  const onDelete = useCallback((todo: ITodo) => deleteTodo(todo), [deleteTodo]);

  return (
    <div className="todos">
      {todos?.map((todo) => (
        <Fragment key={todo.id}>
          <div>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)} />
            <span>{todo.text}</span>
          </div>
          <button onClick={() => onDelete(todo)}>Delete</button>
        </Fragment>
      ))}
    </div>
  );
};

const TodoWithApi = () => (
  <ApiProvider api={todoApi}>
    <Todo />
  </ApiProvider>
);

export default TodoWithApi;
