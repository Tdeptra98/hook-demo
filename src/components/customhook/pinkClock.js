import React from 'react';
import useClock from './useClock';

function pinkClock(props) {
  const { timeString } = useClock;
  return <p style={{ fontSize: '42px' }}>{timeString}</p>;
}

export default pinkClock;
