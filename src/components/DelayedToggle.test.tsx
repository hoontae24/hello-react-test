import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DelayedToggle from "@/components/DelayedToggle";

describe("<DelayedToggle />", () => {
  it("reveals text when toggled", async () => {
    const { getByText } = render(<DelayedToggle />);
    const button = getByText("토글");
    fireEvent.click(button);
    await waitFor(() => getByText("Hello !!"), { timeout: 1000 });
  });
});
