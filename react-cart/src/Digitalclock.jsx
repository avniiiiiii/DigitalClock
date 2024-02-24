import React, { useState, useEffect } from "react";

function Digitalclock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    ////what would we like to do when the component mounts
    const intervalId = setInterval(() => {
      ////every 1000 ms we will update the  state of time using
      //setTime with the new current time
      setTime(new Date());
    }, 1000);
    // we will perform a function/pass a callback every 1000ms //when the component unmounts,
    //we'll return this function i.e if we unmount we don't want the watch running
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    //if its am or pm
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  //function for having leading zeroes if time is in single digits
  function padZero(number) {
    //check if number is single digits
    //if n is less than 10 return 0 if not return empty string +num
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <>
      <div className="clock-container">
        <div className="clock-name">
          <span className="clock">{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default Digitalclock;
