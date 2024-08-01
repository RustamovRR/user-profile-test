import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from ".";

describe("Button component", () => {
  afterEach(() => cleanup());

  it("should render the button with correct text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should apply the correct class for primary type", () => {
    render(<Button buttonType="primary">Primary Button</Button>);
    const button = screen.getByText("Primary Button");

    expect(button).toHaveClass("bg-green-700 hover:bg-green-800");
  });

  it("should apply the correct class for secondary type", () => {
    render(<Button buttonType="secondary">Secondary Button</Button>);
    const button = screen.getByText("Secondary Button");

    expect(button).toHaveClass("bg-gray-700 hover:bg-gray-800");
  });

  it("should apply the disabled class when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");

    expect(button).toHaveClass("opacity-40 cursor-not-allowed");
  });

  it("should handle click event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
