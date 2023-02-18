import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should display the App name inside a heading", () => {
      const expectedHeadingText = "Robot Manager";

      render(<App />, { wrapper: BrowserRouter });
      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
