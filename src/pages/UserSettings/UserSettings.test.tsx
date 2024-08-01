import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserSettings from "./UserSettings";
import userEvent from "@testing-library/user-event";

vi.mock("@hooks", () => ({
  useProfileQuery: vi.fn().mockReturnValue({
    data: {
      id: "1",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      username: "janedoe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Frontend Developer at TechCorp",
      country: "Uzbekistan",
      city: "Tashkent",
      address: "Yakkasaray, Nukus street, 11",
    },
    isLoading: false,
  }),
  useProfileUpdateMutation: vi.fn().mockReturnValue({
    mutateAsync: vi.fn().mockResolvedValue({ data: [] }),
    isPending: false,
  }),
  useCountriesQuery: vi.fn().mockReturnValue({
    data: [
      { name: "Uzbekistan", id: 1 },
      { name: "USA", id: 2 },
    ],
  }),
}));

describe("UserSettings component", () => {
  it("should render form with initial data", async () => {
    render(<UserSettings />);

    // Check initial values
    expect(screen.getByLabelText(/first name/i)).toHaveValue("Jane");
    expect(screen.getByLabelText(/last name/i)).toHaveValue("Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("jane.doe@example.com");
    expect(screen.getByLabelText(/country/i)).toHaveValue("Uzbekistan");
    expect(screen.getByLabelText(/city/i)).toHaveValue("Tashkent");
    expect(screen.getByLabelText(/address/i)).toHaveValue(
      "Yakkasaray, Nukus street, 11"
    );

    // Update form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane.smith@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "janesmith" },
    });
    fireEvent.change(screen.getByLabelText(/country/i), {
      target: { value: "Canada" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "Toronto" },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: "456 Maple St" },
    });

    const submitButton = screen.getByRole("button", { name: /save/i });
    userEvent.click(submitButton);

    setTimeout(async () => {
      const toastText = await screen.findByText(
        /profile updated successfully/i
      );
      expect(toastText).toBeInTheDocument();
    }, 1000);
  });
});
