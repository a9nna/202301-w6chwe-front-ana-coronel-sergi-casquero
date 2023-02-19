import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import RobotCard from "../RobotCard/RobotCard";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <RobotCard />
      </main>
    </>
  );
};

export default Layout;
