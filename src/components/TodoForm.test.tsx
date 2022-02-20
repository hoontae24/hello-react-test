import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoForm, { TodoFormProps } from "@/components/TodoForm";

describe("<TodoForm />", () => {
  const setup = (props: Partial<TodoFormProps>) => {
    const { onInsert = () => null } = props;
    const utils = render(<TodoForm onInsert={onInsert} />);
    const { getByPlaceholderText, getByText } = utils;

    const input = getByPlaceholderText("할 일을 입력하세요.");
    const button = getByText("등록");

    return {
      input,
      button,
    };
  };

  it("has input and a button", () => {
    const { input, button } = setup({});
    expect(input).toBeTruthy();
    expect(input.tagName).toBe("INPUT");
    expect(button).toBeTruthy();
    expect(button.tagName).toBe("BUTTON");
  });

  it("changes input", () => {
    const { input } = setup({});

    fireEvent.change(input, {
      target: { value: "TDD 배우기" },
    });

    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    fireEvent.change(input, {
      target: { value: "TDD 배우기" },
    });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
