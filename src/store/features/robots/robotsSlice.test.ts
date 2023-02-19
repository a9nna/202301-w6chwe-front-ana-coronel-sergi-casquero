import { RobotStructure } from "../../../types";
import { loadRobotListActionCreator, robotsReducer } from "./robotsSlice";

const robot1: RobotStructure = {
  id: 2,
  name: "",
  image: "",
  stats: {
    speed: 2,
    endurance: 5,
    creationDate: new Date().getDay(),
  },
};
const robot2: RobotStructure = {
  id: 2,
  name: "",
  image: "",
  stats: {
    speed: 3,
    endurance: 7,
    creationDate: new Date().getDay(),
  },
};
const robotsList = [robot1, robot2];

describe("Given a robotsSlice with its loadRobotList reducer", () => {
  describe("When it receives a list of 2 robots", () => {
    test("Then it should return a list with these 2 robots through the loadRobotListActionCreator", () => {
      const robot1: RobotStructure = {
        id: 2,
        name: "",
        image: "",
        stats: {
          speed: 2,
          endurance: 5,
          creationDate: new Date().getDay(),
        },
      };
      const robot2: RobotStructure = {
        id: 2,
        name: "",
        image: "",
        stats: {
          speed: 3,
          endurance: 7,
          creationDate: new Date().getDay(),
        },
      };
      const expectedRobotsList = [robot1, robot2];

      const loadRobotListAction = loadRobotListActionCreator(robotsList);
      const newRobotList = robotsReducer(robotsList, loadRobotListAction);

      expect(newRobotList).toStrictEqual(expectedRobotsList);
    });
  });
});
