import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types";
import "@testing-library/jest-dom";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When rendered", () => {
    test("Then it should show the name of the robot inside a heading", () => {
      const expectedRobotName = "Enforcer";
      const robot: RobotStructure = {
        id: 2,
        name: expectedRobotName,
        image: "",
        stats: {
          speed: 8,
          endurance: 6,
          creationDate: new Date().getDay(),
        },
      };

      render(<RobotCard robot={robot} />);
      const robotName = screen.getByRole("heading", {
        level: 3,
        name: expectedRobotName,
      });

      expect(robotName).toBeInTheDocument();
    });
  });
});
