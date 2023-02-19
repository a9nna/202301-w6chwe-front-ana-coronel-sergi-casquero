import { Outlet } from "react-router-dom";
import { RobotStructure } from "../../types";
import Header from "../Header/Header";
import RobotCard from "../RobotCard/RobotCard";

const Layout = (): JSX.Element => {
  const sampleRobot: RobotStructure = {
    id: 263781,
    name: "Enforcer",
    image:
      "https://img.freepik.com/premium-photo/portrait-futuristic-robot-artistic-abstract-steampunk-fantasy-concept-modern-robot_158863-2149.jpg?w=740",
    stats: {
      speed: 8,
      endurance: 6,
      creationDate: new Date().getDay(),
    },
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
        <RobotCard robot={sampleRobot} />
      </main>
    </>
  );
};

export default Layout;
