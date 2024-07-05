import { useState, useEffect } from "react";

const useScreenWidth = (threshold = 768, condition = 'greater') => {
  const [isConditionMet, setIsConditionMet] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;
      if (condition === 'greater') {
        setIsConditionMet(screenWidth > threshold);
      } else if (condition === 'smaller') {
        setIsConditionMet(screenWidth < threshold);
      }
    };

    checkWidth(); // Check on mount
    window.addEventListener("resize", checkWidth); // Add resize listener

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", checkWidth);
  }, [threshold, condition]); // Include condition in the dependency array

  return isConditionMet;
}

export default useScreenWidth;
