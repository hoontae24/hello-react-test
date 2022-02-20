import { useCallback, VFC } from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: VFC<TodoItemProps> = (props) => {
  const { todo, onToggle, onRemove } = props;

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);

  const handleRemove = useCallback(() => {
    onRemove(todo.id);
  }, [todo.id, onRemove]);

  return (
    <li>
      <span
        style={{
          ...(todo.done ? { textDecoration: "line-through" } : {}),
        }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
};

export default TodoItem;
