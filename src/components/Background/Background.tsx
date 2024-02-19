import { ReactNode } from "react";

import "./Background.css";


const Background = ({ children }: { children: ReactNode }) => {
    return (
        <div className="background">
            <div className="top-row"></div>
            <div className="main-content">{children}</div>
            <div className="left-column"></div>
            <div className="right-column"></div>
        </div>
    );
};

export default Background;
