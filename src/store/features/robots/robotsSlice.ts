import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotListStructure } from "../../../types";

const robotsListInitialState: RobotListStructure = [];

export const robotsSlice = createSlice({
  name: "robotsList",
  initialState: robotsListInitialState,
  reducers: {
    loadRobotList: (
      currentRobotList,
      action: PayloadAction<RobotListStructure>
    ) => [...action.payload],
  },
});

export const robotsReducer = robotsSlice.reducer;
export const { loadRobotList: loadRobotListActionCreator } =
  robotsSlice.actions;
