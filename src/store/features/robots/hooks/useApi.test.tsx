import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Wrapper from "../../../../mocks/Wrapper";
import { RobotListStructure, RobotStructure } from "../../../../types";
import { loadRobotListActionCreator, robotsReducer } from "../robotsSlice";
import useApi from "./useApi";

const mockDispatcher = jest.fn();

jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

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

describe("Given a hook useApi", () => {
  describe("When loadRobotListActionCreator is dispatched with payload 'robotsList'", () => {
    test("Then current state should be equal to that robot list", () => {
      const store = configureStore({
        reducer: robotsReducer,
      });
      const robotsList: RobotListStructure = [robot1, robot2];

      store.dispatch(loadRobotListActionCreator(robotsList));

      expect(store.getState()).toStrictEqual(robotsList);
    });
  });

  describe("When it receives a list of robots by fetching an API", () => {
    test("Then it should return that list of robots", async () => {
      const {
        result: {
          current: { getRobotList },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await act(async () => getRobotList());

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
