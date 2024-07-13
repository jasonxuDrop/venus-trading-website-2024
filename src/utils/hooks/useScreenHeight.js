import { useState, useEffect } from "react";

const useScreenHeight = (threshold = 500, condition = "greater") => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      const screenHeight = window.innerHeight;
      if (condition === "greater") {
        setIsAboveThreshold(screenHeight > threshold);
      } else if (condition === "smaller") {
        setIsAboveThreshold(screenHeight < threshold);
      }
    };

    checkHeight(); // Check on mount
    window.addEventListener("resize", checkHeight); // Add resize listener

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", checkHeight);
  }, [threshold, condition]);

  return isAboveThreshold;
};

export default useScreenHeight;
