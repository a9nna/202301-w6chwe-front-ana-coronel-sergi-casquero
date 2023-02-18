import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <i className="fa-solid fa-bars"></i>
      <h1>Robot Manager</h1>
      <i className="fa-solid fa-share-nodes"></i>
      <i className="fa-solid fa-magnifying-glass"></i>
    </HeaderStyled>
  );
};

export default Header;
