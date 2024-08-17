'use client'

import React, { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const ViewportSize: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  const targetSize = { width: 1673, height: 882 };

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <div className='px-24 py-16 border rounded-xl text-card-foreground text-center'>
      <div className="text-center">
        <p className={`text-base font-semibold ${windowSize.width === targetSize.width && windowSize.height === targetSize.height ? 'text-primary' : 'text-destructive'}`}>
          width x height
        </p>          
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">{windowSize.width ?? 'unknown'} x {windowSize.height ?? 'unknown'}</h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground">{targetSize.width ?? 'unknown'} x {targetSize.height ?? 'unknown'}</p>
        </div>
    </div>
  );
}

export default ViewportSize;