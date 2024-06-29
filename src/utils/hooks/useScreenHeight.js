import { useState, useEffect } from "react";

function useScreenHeight(threshold = 500) {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      const screenHeight = window.innerHeight;
      setIsAboveThreshold(screenHeight > threshold);
    };

    checkHeight(); // Check on mount
    window.addEventListener("resize", checkHeight); // Add resize listener

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", checkHeight);
  }, [threshold]);

  return isAboveThreshold;
}

export default useScreenHeight;
