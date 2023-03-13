import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>pomodoro</h1>
      <div className="timer__container">
        <div className="timer__type">work</div>
        <div className="timer__type">short break</div>
        <div className="timer__type">long break</div>
      </div>
      {/* Timer Main Component */}
    </div>
  );
};

export default App;
