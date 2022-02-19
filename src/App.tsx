import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <div>
      <h1>Hello React with Test</h1>
    </div>
  );
};

export default App;
