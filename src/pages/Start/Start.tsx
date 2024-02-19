import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

import "./Start.css";

const StartPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("home");

  return (
    <div className="content-home">
      <h1 className="text-style-s48-w500">Luca DELTORT</h1>
      <a className="clickable-picture" onClick={navigateToHome}>
        <ProfilePicture />
      </a>
      <h2 className="text-style-s24-w400">Clap my hand to discover me</h2>
    </div>
  );
};

export default StartPage;
