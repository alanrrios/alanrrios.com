'use client'

interface TimesProps {
  size?: string;
  timezone?: string;
}  

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { UTCDate } from "@date-fns/utc";

export default function Times({ size, timezone }: TimesProps) { // Removed params
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const getStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: 'w-[131px] h-[64px]',
          margin: 'm-auto',
          text: 'text-xl'
        };
      case 'large':
        return {
          container: 'w-[236px] h-[82px]',
          margin: 'm-auto',
          text: 'text-4xl'
        };
      default:
        return {
          container: '',
          margin: '',
          text: 'text-base'
        };
    }
  };

  const styles = getStyles();

  const isUniversalTime = timezone === 'utc'; // Check if timezone prop is 'UTC'

  let formattedDate, formattedTime, timeZoneLabel;

  if (isUniversalTime) {
    const utcDateTime = new UTCDate(currentDateTime);
    formattedDate = format(utcDateTime, 'MMM d');
    formattedTime = format(utcDateTime, 'hh:mm:ss aa');
    timeZoneLabel = 'UTC';
  } else {
    formattedDate = format(currentDateTime, 'MMM d');
    formattedTime = format(currentDateTime, 'hh:mm:ss aa');
    timeZoneLabel = 'CDT';
  }

  return (
    <div className={`flex flex-row ${styles.container}`}>
      <div className={`flex flex-col text-center ${styles.margin}`}>
        <div className={`${styles.text} font-semibold text-white text-outline`}>{formattedTime}</div>
        <div className={`${styles.text} font-semibold text-white text-outline`}>{formattedDate} {timeZoneLabel}</div>
      </div>
    </div>
  );
};