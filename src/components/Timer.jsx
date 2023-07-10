import React, { useState, useEffect } from 'react';

const Timer = ({inputValue}) => {
  
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (inputValue) {
        const intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        }, 1);

        return () => clearInterval(intervalId);
    }
  }, []);

  return <div>{elapsedTime} миллисекунд</div>;
};

export default Timer;
