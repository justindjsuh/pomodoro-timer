import { useState } from "react";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import Timer from "./components/Timer";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>pomodoro</h1>
      <div className="timerType__container">
        <div className="timer__type">work</div>
        <div className="timer__type">short break</div>
        <div className="timer__type">long break</div>
      </div>
      {/* Timer Main Component */}
      <Timer />
      <FiSettings />
    </div>
  );
};

export default App;
