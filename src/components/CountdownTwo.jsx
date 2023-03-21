import React, { useState, useEffect, useRef } from "react";

const CountdownTwo = () => {
  const deadline = "2023-03-25T00:00:00Z"; // Set deadline date here
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(deadline));
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime(calculateRemainingTime(deadline));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [deadline]);

  const { days, hours, minutes, seconds } = remainingTime;

  return (
    <div>
      <p>Days: {days}</p>
      <p>Hours: {hours}</p>
      <p>Minutes: {minutes}</p>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

const calculateRemainingTime = (deadline) => {
  const totalSeconds = (new Date(deadline) - new Date()) / 1000;
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
};

export default CountdownTwo;
