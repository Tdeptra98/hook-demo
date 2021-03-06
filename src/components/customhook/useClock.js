import React, { useEffect, useState } from 'react';

function formatDate(date) {
  if (!date) return '';
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getminutes()}`.slice(-2);
  const seconds = `0${date.getseconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}
function useClock() {
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      // cleanup
      console.log('Clock cleanup');
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
