import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the app name inside a level 1 heading", () => {
      const title = "Robot Manager";

      render(<Header />);
      const heading = screen.getByRole("heading", { level: 1, name: title });

      expect(heading).toBeInTheDocument();
    });
  });
});
