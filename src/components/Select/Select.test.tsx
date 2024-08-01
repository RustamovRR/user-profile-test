import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Select from ".";

const options = [
  { label: "option 1", value: "1" },
  { label: "option 2", value: "2" },
];

describe("Select component", () => {
  afterEach(() => cleanup());

  it("should render select with options", () => {
    render(<Select options={options} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("option 1")).toBeInTheDocument();
    expect(screen.getByText("option 2")).toBeInTheDocument();
  });

  it("should display error when the error prop is provided", () => {
    render(<Select options={options} error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should handle select change", async () => {
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
