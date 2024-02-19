import { ReactSVG } from "react-svg";
import clubs from "../../assets/svg/clubs.svg";
import hearts from "../../assets/svg/heart.svg";
import spades from "../../assets/svg/spade.svg";
import diamonds from "../../assets/svg/diamond.svg";

import "./Home.css";

const HomePage = () => {
  return (
    <div className="content" >
      <div className="four-cards">
        <div className="clubs-card">
          <ReactSVG src={clubs} />
        </div>
        <div className="heart-card">
          <ReactSVG src={hearts} className="card" />
        </div>
        <div className="spade-card">
          <ReactSVG src={spades} className="card" />
        </div>
        <div className="diamond-card">
          <ReactSVG src={diamonds} className="card"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
