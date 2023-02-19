import styled from "styled-components";

const RobotCardStyled = styled.article`
  width: 350px;
  height: 415px;
  margin-top: 50px;

  .robot-card {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0e1222;
      padding: 17px 30px;
      height: 85px;
      border-radius: 20px 20px 0 0;
    }

    &__title {
      font-weight: 800;
      margin-bottom: 4px;
    }

    &__id {
      font-size: 0.85rem;
    }

    &__button--edit {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      font-size: 20px;
      border: none;
      background-color: #00edf8;
      cursor: pointer;
    }

    &__image {
      object-fit: cover;
      object-position: top;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 130px;
      padding: 17px 30px;
      background-color: #0e1222;
      border-radius: 0 0 20px 20px;
    }

    &__robot-data {
      display: flex;
      flex-direction: column;
      gap: 13px;

      span {
        opacity: 0.7;
      }
    }

    &__button--remove {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      font-size: 20px;
      border: none;
      background-color: #00edf8;
      cursor: pointer;
    }
  }
`;

export default RobotCardStyled;
