import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import PageTransions from "../../components/Animations/PageTransions";

import "./Start.css";

const StartPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <PageTransions>
      <div className="content-home">
        {!isClicked ? (
          <h1 className="text-style-s48-w500">Luca DELTORT</h1>
        ) : null}
        <a className="clickable-picture" onClick={navigateToHome}>
          <motion.div
            animate={isClicked ? { scale: 2 } : { scale: 1 }}
            initial={{ scale: 0 }}
            children={<ProfilePicture />}
          />
        </a>
        {!isClicked ? (
          <h2 className="text-style-s24-w400">Clap my hand to discover me</h2>
        ) : null}
      </div>
    </PageTransions>
  );
};

export default StartPage;
