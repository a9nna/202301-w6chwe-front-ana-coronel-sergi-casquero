import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    name,
    id,
    image,
    stats: { creationDate, endurance, speed },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled className="robot-card">
      <div className="robot-card__header">
        <div className="robot-card__header-data">
          <h3 className="robot-card__title">{name}</h3>
          <span className="robot-card__id">#{id}</span>
        </div>
        <button className="robot-card__button--edit">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
      <img
        className="robot-card__image"
        width="350"
        height="210"
        src={image}
        alt="astrobot"
      />
      <div className="robot-card__footer">
        <div className="robot-card__robot-data">
          <span>Speed: {speed}</span>
          <span>Endurance: {endurance}</span>
          <span>Creation Date: {creationDate}</span>
        </div>
        <button className="robot-card__button--remove">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
