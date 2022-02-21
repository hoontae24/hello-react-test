import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Todo } from "@/components/todo";
import TodoItem, { TodoItemProps } from "@/components/TodoItem";

describe("TodoItem />", () => {
  const sampleTodo: Todo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (props: Partial<TodoItemProps>) => {
    const initialProps = {
      todo: props.todo ?? sampleTodo,
      onToggle: props.onToggle ?? jest.fn(),
      onRemove: props.onRemove ?? jest.fn(),
    };
    const utils = render(<TodoItem {...initialProps} />);
    const { getByText } = utils;
    const { todo } = initialProps;
    const span = getByText(todo.text);
    const button = getByText("삭제");
    return { span, button };
  };

  it("has span and button", () => {
    const { span, button } = setup({});
    expect(span).toBeTruthy();
    expect(span.tagName).toBe("SPAN");
    expect(button).toBeTruthy();
    expect(button.tagName).toBe("BUTTON");
  });

  it("shows line-through on span when done", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through");
  });

  it("does not show line-through on span when undone", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setup({ todo: sampleTodo, onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setup({ todo: sampleTodo, onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
