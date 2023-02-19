import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should display the App name inside a heading", () => {
      const expectedHeadingText = "Robot Manager";

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
