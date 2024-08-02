import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const vespertino = hours >= 12 ? "PM" : "AM";

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${vespertino}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <h2>{formatTime()}</h2>
    </>
  );
}

export default DigitalClock;
