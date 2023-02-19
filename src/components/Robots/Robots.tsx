import { useEffect } from "react";
import useApi from "../../store/features/robots/hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotsStyled from "./RobotsStyled";

const Robots = (): JSX.Element => {
  const { getRobotList } = useApi();

  useEffect(() => {
    getRobotList();
  }, [getRobotList]);

  const robots = useAppSelector((state) => state.robotsReducer);

  return (
    <RobotsStyled>
      {robots.map((robot) => (
        <li key={robot.id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotsStyled>
  );
};

export default Robots;
