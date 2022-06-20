import React from 'react'
import './StopWatch.scss'
import { useState, useEffect } from "react";

export const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() =>{
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [timerOn]);
    
    return (
    <div className='stop-watch'>
    <img src='https://icon-library.com/images/clock-icon-white/clock-icon-white-4.jpg' alt='clock'></img>
        <h2><span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
<span>{("0" + ((time / 10) % 100)).slice(-2)}</span></h2>
<div id="buttons">
        {!timerOn && time === 0 && (
          <button className='button-17' onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className='button-17' onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className='button-17' onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className='button-17' onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  )
}
