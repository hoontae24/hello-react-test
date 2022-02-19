import { render } from "@testing-library/react";

import App from "./App";

it("renders a welcome text", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello React with Test")).toBeTruthy();
});
