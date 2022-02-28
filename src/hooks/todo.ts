import { useCallback, useState } from "react";

import { Todo } from "@/components/todo";

export interface TodoStoreDeps {
  initialTodos?: Todo[];
}

export interface TodoStore {
  todos: Todo[];
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export const useTodoStore = (deps?: TodoStoreDeps): TodoStore => {
  const { initialTodos } = deps || {};
  const [todos, setTodos] = useState(initialTodos || []);

  const onInsert = useCallback((text: string) => {
    setTodos((prev) => {
      const nextId =
        prev.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return [...prev, { id: nextId, text, done: false }];
    });
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((prev) => {
      const target = prev.find((todo) => todo.id === id);
      if (target) {
        target.done = !target.done;
      }
      return prev.slice();
    });
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }, []);

  return { todos, onInsert, onToggle, onRemove };
};
