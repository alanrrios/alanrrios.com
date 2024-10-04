'use client'

import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [dotCount, setDotCount] = useState(1);

  const date = format(new Date, 'yyyy MMMM dd, EEEE')

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount % 3) + 1);
    }, 500); // Change dots every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className={`flex flex-row px-2`}>
            <div className={`flex flex-col justify-start items-center space-y-6`}>
              <div className='flex flex-row gap-5 items-center'>
                <div
                  style={{
                    width: `38px`,
                    height: `38px`,
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.2s',
                    boxShadow: `0 0 0 6px rgba(255, 0, 0, 0.3)`
                  }}
                />
                <div className={`text-6xl font-semibold text-white text-outline`}>RECORDING IN PROGRESS</div>  
              </div>
              <div className={`text-9xl font-semibold text-white text-outline`}>{date}</div>
              <div className={`text-6xl font-semibold text-white text-outline flex items-center`}>
                <span>Starting video log</span>
                <span className="w-[3ch] inline-block text-left">
                  {'.'.repeat(dotCount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}