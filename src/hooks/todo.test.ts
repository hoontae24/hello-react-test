import { act, renderHook } from "@testing-library/react-hooks";

import { useTodoStore } from "@/hooks/todo";

describe("useTodoStore", () => {
  describe("todos", () => {
    it("has empty data when no initialTodos", () => {
      const { result } = renderHook(() => useTodoStore());
      expect(result.current.todos).toEqual([]);
    });

    it("has data from initialTodos", () => {
      const { result } = renderHook(() =>
        useTodoStore({
          initialTodos: [{ id: 1, text: "TDD 배우기", done: false }],
        })
      );

      expect(result.current.todos).toEqual([
        { id: 1, text: "TDD 배우기", done: false },
      ]);
    });
  });

  describe("onInsert", () => {
    it("adds new todo by a text", () => {
      const { result } = renderHook(() =>
        useTodoStore({
          initialTodos: [{ id: 1, text: "TDD 배우기", done: false }],
        })
      );

      act(() => {
        result.current.onInsert("React 배우기");
      });

      expect(result.current.todos).toEqual([
        { id: 1, text: "TDD 배우기", done: false },
        { id: 2, text: "React 배우기", done: false },
      ]);
    });
  });

  describe("onToggle", () => {
    it("toggles done of todo by id", () => {
      const { result } = renderHook(() =>
        useTodoStore({
          initialTodos: [{ id: 1, text: "TDD 배우기", done: false }],
        })
      );

      act(() => {
        result.current.onToggle(1);
      });

      expect(result.current.todos).toEqual([
        { id: 1, text: "TDD 배우기", done: true },
      ]);
    });
  });

  describe("onRemove", () => {
    it("removes todo by id", () => {
      const { result } = renderHook(() =>
        useTodoStore({
          initialTodos: [
            { id: 1, text: "TDD 배우기", done: false },
            { id: 2, text: "React 배우기", done: false },
          ],
        })
      );

      act(() => {
        result.current.onRemove(1);
      });

      expect(result.current.todos).toEqual([
        { id: 2, text: "React 배우기", done: false },
      ]);
    });
  });
});
