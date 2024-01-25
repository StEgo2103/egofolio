import "./Header.css";
import pp from "../assets/Luca.png";

function Header() {
  return (
    <>
      <div className="h-line up"></div>
      <div className="header">
        <div>
          <img src={pp} className="logo"></img>
        </div>
        <div className="text-content">
          <h1 className="name">Luca DELTORT</h1>
          <h3 className="name">Front-end développeur</h3>
        </div>
      </div>
      <div className="h-line down"></div>
    </>
  );
}

export default Header;
