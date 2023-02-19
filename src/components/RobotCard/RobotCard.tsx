const RobotCard = (): JSX.Element => {
  return (
    <>
      <div className="robot-card__header">
        <div className="robot-card__header-data">
          <h3 className="robot-card__title">AstroBot</h3>
          <span className="robot-card__id">#263781</span>
        </div>
        <button className="robot-card__button--edit">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
      <img
        className="robot-card__image"
        width="350"
        height="210"
        src="https://img.freepik.com/premium-photo/portrait-futuristic-robot-artistic-abstract-steampunk-fantasy-concept-modern-robot_158863-2149.jpg?w=740"
        alt="astrobot"
      />
      <div className="robot-card__footer">
        <div className="robot-card__robot-data">
          <span>Speed: 8</span>
          <span>Endurance: 6</span>
          <span>Creation Date: 27/12/1989</span>
        </div>
        <button className="robot-card__button--remove">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </>
  );
};

export default RobotCard;
