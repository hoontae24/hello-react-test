import { FormEvent, useCallback, useState } from "react";

export interface TodoFormProps {
  onInsert: (text: string) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const { onInsert } = props;

  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(value);
      setValue("");
    },
    [value, onInsert]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
