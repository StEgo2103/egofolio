import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";

import PageTransions from "../../components/Animations/PageTransions";

import clubs from "../../assets/svg/clubs.svg";
import hearts from "../../assets/svg/heart.svg";
import spades from "../../assets/svg/spade.svg";
import diamonds from "../../assets/svg/diamond.svg";

import "./Home.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(-1);

  const getText = () => {
    switch (true) {
      case count >= 0 && count < 5:
        return "This is not a card... Do you know what a card is?";
      case count >= 5 && count < 8:
        return "I said, this is not a card!";
      case count >= 8 && count < 10:
        return "You are not listening, are you?";
      case count >= 10 && count < 15:
        return "I am not going to tell you again!";
      case count >= 15 && count < 20:
        return "I am done with you!";
      case count >= 20 && count < 50:
        return "Why are you still clicking?";
      case count >= 50 && count < 100:
        return "Well, I am not going to stop you...";
      case count >= 100 && count < 1000:
        return "i'm not sure what you are expecting...";
      case count >= 1000 && count < 10000:
        return "You clicked 1000 times, just in case you were wondering...";
      default:
        return "It is the last I promise!";
    }
  };

  const handleClick = () => {
    setOpen(true);
    setCount(count + 1);
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <PageTransions>
      <div className="content">
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
            <ReactSVG src={diamonds} className="card" />
          </div>
        </div>
        <motion.div
          className="shape"
          animate={{
            rotate: [15, -15, 15],
            borderRadius: ["50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          children={<h2 className="text-style-32-w500">Pick a card</h2>}
          onClick={handleClick}
        />
        {/* <div className="shape" onClick={handleClick}>
        <h2 className="text-style-32-w500">Pick a card</h2>
      </div> */}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={getText()}
        />
      </div>
    </PageTransions>
  );
}
