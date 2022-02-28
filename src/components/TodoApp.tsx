import { VFC } from "react";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useTodoStore } from "@/hooks/todo";

export interface TodoAppProps {}

const TodoApp: VFC<TodoAppProps> = (props) => {
  const todoStore = useTodoStore({
    initialTodos: [
      {
        id: 1,
        text: "TDD 배우기",
        done: true,
      },
      {
        id: 2,
        text: "react-testing-library 사용하기",
        done: true,
      },
    ],
  });

  return (
    <div>
      <TodoForm onInsert={todoStore.onInsert} />
      <TodoList
        todos={todoStore.todos}
        onToggle={todoStore.onToggle}
        onRemove={todoStore.onRemove}
      />
    </div>
  );
};

export default TodoApp;
