import React, { useEffect, useRef, useState } from 'react'
import "../../hooks/hooks.css";


export const UseRefHook = () => {
  const [time, Settime] = useState(0);
  const interval = useRef(null);

  const stopTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
  }
  const satrtTimer = () => {
    interval.current = setInterval(() => {
      Settime(prev => prev + 1);
    }, 1000);
  };



  return (
    <>
      <h2>Timer : {time}</h2>
      <button onClick={satrtTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}


//start - stop timer
// export const Timer = () => {
//   const [time, Settime] = useState(0);
//   const interval = useRef(null);

//   const stopTimer = () => {
//     clearInterval(interval.current);
//     interval.current = null;
//   }
//   const satrtTimer = () => {
//     interval.current = setInterval(() => {
//       Settime(prev => prev + 1);
//     }, 1000);
//   };



//   return (
//     <>
//       <h2>Timer : {time}</h2>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </>
//   )
// }
