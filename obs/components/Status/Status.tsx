'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { format } from 'date-fns';

const BlinkingDot = () => {
  const pathname = usePathname();

  const date = format(new Date, 'EEEE')

  const pathSegments = pathname.split('/').filter(Boolean);
  const secondToLastSegment = pathSegments.length > 1 ? pathSegments[pathSegments.length - 2] : '';

  const getStyles = () => {
    switch (secondToLastSegment.toLowerCase()) {
      case 'small':
        return {
          container: 'w-[131px] h-[64px]',
          margin: 'my-auto',
          text: 'text-xl',
          dot: '20px',
          shadow: '0 0 0 4px rgba(255, 0, 0, 0.3)'
        };
      case 'large':
        return {
          container: 'w-[236px] h-[82px]',
          margin: 'my-auto',
          text: 'text-4xl',
          dot: '28px',
          shadow: '0 0 0 6px rgba(255, 0, 0, 0.3)'
        };
      default:
        return {
          container: '',
          margin: '',
          text: 'text-base',
          dot: '16px',
          shadow: '0 0 0 4px rgba(255, 0, 0, 0.3)'
        };
    }
  };

  const styles = getStyles();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-row px-2 ${styles.container}`}>
      <div className={`flex flex-col justify-start ${styles.margin}`}>
        <div className={`${styles.text} font-semibold text-white text-outline`}>{date}</div>
        <div className='flex flex-row gap-3 items-center'>
          <div
            style={{
              width: `${styles.dot}`,
              height: `${styles.dot}`,
              borderRadius: '50%',
              backgroundColor: 'red',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.2s',
              boxShadow: `${styles.shadow}`
            }}
          />
          <div className={`${styles.text} font-semibold text-white text-outline`}>REC</div>  
        </div>
      </div>  
    </div>
  );
};

export default BlinkingDot;