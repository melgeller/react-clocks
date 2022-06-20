import React, { useEffect } from 'react'
import { useState } from 'react'
import './DigitalClock.scss'

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    }, 1000 );
}, []);
  return (
    <div className='digital-clock'>
    <img src="https://icon-library.com/images/clock-512_15562.png" alt="clock2"></img>
        <h2>{clockState}</h2>
    </div>
    
  )
}

export default DigitalClock