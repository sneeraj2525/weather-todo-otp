import React, { useEffect, useRef, useState } from "react";
import "../CounterTimer/CounterTimer.css";

const CounterTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const intervalRef = useRef(null);

  const handleInput = (event) => {
    setTime(parseInt(event.target.value * 60));
    
  };

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    return `${min} : ${sec}`;
  };

  // for start timer
  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setIsActive(false);
      
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);


    // for pause timer
  const handlePause = () => {
    setIsPause(!isPause);
  };


    // for reset timer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPause(false);
    setTime(0);
  };

  return (
    <div>
      <div className="container">
        <div className="weather-container">
          <div className="">
            <h2 className="text-center">Countdown Timer</h2>
            <div className="timer-display my-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter time in minute "
                onChange={handleInput}
              />
              <div className="show-time">{formatTime()}</div>
            </div>
            <div className="timer-controls text-center">
              <button className="btn btn-primary mx-1 " onClick={handleStart} disabled={isActive && isPause}>
                Start
              </button>
              <button className="btn btn-primary mx-1 " onClick={handlePause} disabled={!isActive}>
                {isPause ? " Resume" : "Pause"}
              </button>
              <button className="btn btn-primary mx-1 " onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTimer;
