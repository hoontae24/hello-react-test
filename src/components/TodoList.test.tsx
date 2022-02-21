import { fireEvent, render } from "@testing-library/react";

import TodoList from "@/components/TodoList";

describe("<TodoList />", () => {
  const sampleTodos = [
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
  ];

  it("renders todos properly", () => {
    const { getByText } = render(
      <TodoList
        todos={sampleTodos}
        onToggle={() => null}
        onRemove={() => null}
      />
    );
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );

    const span = getByText(sampleTodos[0].text);
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    const deleteButton = getAllByText("삭제")[0];
    fireEvent.click(deleteButton);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
