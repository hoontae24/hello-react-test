import { useCallback, useState, VFC } from "react";

export interface DelayedToggleProps {}

const DelayedToggle: VFC<DelayedToggleProps> = (props) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={onToggle}>ν κΈ</button>
      <div>
        μν: <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>Hello !!</div>}
    </div>
  );
};

export default DelayedToggle;
