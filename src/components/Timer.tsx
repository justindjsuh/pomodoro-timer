import React from "react";
import "./styles.css";

const Timer: React.FC = () => {
  return (
    <div className="timer__container">
      <div className="timer__body">
        <p>TIME</p>
        <button>PAUSE</button>
      </div>
    </div>
  );
};

export default Timer;
