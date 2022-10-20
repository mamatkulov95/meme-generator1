import "./Header.css";
import logo from "../images/header-logo1.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-logo" src={logo}></img>
        <p className="header-left-text">Meme Generator</p>
      </div>
      <p className="header-right-text">React Course - Project 3</p>
    </header>
  );
};

export default Header;
