import { VFC } from "react";

import { Todo } from "@/components/todo";
import TodoItem from "@/components/TodoItem";

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: VFC<TodoListProps> = (props) => {
  const { todos, onToggle, onRemove } = props;
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
