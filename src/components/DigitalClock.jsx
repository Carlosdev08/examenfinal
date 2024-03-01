"use client"
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex justify-center items-center h-screen border-10 bg-black font'> 
      <div className=' font-bold text-blue-600 border-green-600 flex justify-center text-7xl flex-col items-center border-8 gap-4 rounded-xl p-4'>
        <h1 className='text-white '>Digital Clock</h1>
        <h2 className='text-green-600 font-bold'>{time.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
}

export default DigitalClock;