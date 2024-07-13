import { useEffect, useState } from 'react';

const useScrollDetection = (targetId) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error(`Element with ID ${targetId} not found.`);
      return;
    }
    else {
      console.log(targetElement);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPast(!entry.isIntersecting);
      },
      {
        threshold: [1.0],
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [targetId]);

  return isScrolledPast;
};

export default useScrollDetection;
