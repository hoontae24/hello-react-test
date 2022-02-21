import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useCallback, useState, VFC } from "react";

export interface TodoAppProps {}

const TodoApp: VFC<TodoAppProps> = (props) => {
  const [todos, setTodos] = useState([
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
  ]);

  const handleInsert = useCallback((text: string) => {
    setTodos((prev) => {
      const nextId =
        prev.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return [...prev, { id: nextId, text, done: false }];
    });
  }, []);

  const handleToggle = useCallback((id: number) => {
    setTodos((prev) => {
      const target = prev.find((todo) => todo.id === id);
      if (target) {
        target.done = !target.done;
      }
      return prev.slice();
    });
  }, []);

  const handleRemove = useCallback((id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }, []);

  return (
    <div>
      <TodoForm onInsert={handleInsert} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
};

export default TodoApp;
