import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled className="robot-card">
      <div className="robot-card__header">
        <div className="robot-card__header-data">
          <h3 className="robot-card__title">{robot.name}</h3>
          <span className="robot-card__id">#{robot.id}</span>
        </div>
        <button className="robot-card__button--edit">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
      <img
        className="robot-card__image"
        width="350"
        height="210"
        src={robot.image}
        alt="astrobot"
      />
      <div className="robot-card__footer">
        <div className="robot-card__robot-data">
          <span>Speed: {robot.stats.speed}</span>
          <span>Endurance: {robot.stats.endurance}</span>
          <span>Creation Date: {robot.stats.creationDate}</span>
        </div>
        <button className="robot-card__button--remove">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
