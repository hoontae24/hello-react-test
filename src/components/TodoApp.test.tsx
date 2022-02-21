import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoApp from "@/components/TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <TodoApp />
    );
    getByPlaceholderText("할 일을 입력하세요.");
    getByText("등록");
    getByTestId("TodoList");
  });

  it("renders two default todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });

  it("creates new todo", () => {
    const { getByText, getByPlaceholderText } = render(<TodoApp />);

    expect(() => getByText("새로운 할 일")).toThrow();

    const input = getByPlaceholderText("할 일을 입력하세요.");
    fireEvent.change(input, { target: { value: "새로운 할 일" } });

    const button = getByText("등록");
    fireEvent.click(button);

    getByText("새로운 할 일");
  });

  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);
    const span = getByText("TDD 배우기");
    expect(span).toHaveStyle("text-decoration: line-through");
    fireEvent.click(span);
    expect(span).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(span);
    expect(span).toHaveStyle("text-decoration: line-through");
  });

  it("removes todo", () => {
    const { getByText } = render(<TodoApp />);
    const span = getByText("TDD 배우기");
    const button = span.nextSibling;
    expect(button).toBeTruthy();
    if (button) {
      fireEvent.click(button);
    }
    expect(span).not.toBeInTheDocument();
    expect(() => getByText("TDD 배우기")).toThrow();
  });
});
