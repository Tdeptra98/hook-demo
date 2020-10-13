import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
  const listColor = ['red', 'pink', 'black', 'blue'];
  const currentColorIndex = listColor.indexOf(currentColor);
  let newIndex = currentColorIndex;
  while (newIndex === currentColorIndex) {
    newIndex = Math.trunc(Math.random() * listColor.length);
  }
  console.log(listColor[newIndex]);
  return listColor[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');
  // change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
