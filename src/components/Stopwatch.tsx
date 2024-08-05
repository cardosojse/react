import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
        clearInterval(intervalRef.current);
    }

  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let mili = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    mili = String(mili).padStart(2, "0");

    return `${minutes}:${seconds}:${mili}`;
  };

  return (
    <>
      <h2>{formatTime()}</h2>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
