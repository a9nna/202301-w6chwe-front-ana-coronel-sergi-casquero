import { useCallback } from "react";
import { useAppDispatch } from "../../../hooks";
import { loadRobotListActionCreator } from "../robotsSlice";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobotList = useCallback(async () => {
    try {
      const apiResponse = await fetch(apiUrl);
      const robotList = await apiResponse.json();

      dispatch(loadRobotListActionCreator(robotList.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getRobotList };
};

export default useApi;
