import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollDetection = (targetId) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const observerRef = useRef(null);
  const location = useLocation(); // This hook provides the current location object

  useEffect(() => {
    // Check if we are on the home page
    if (location.pathname === '/') {
      const tryObserve = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (observerRef.current) {
            observerRef.current.disconnect(); // Ensure to disconnect any previous observers
          }

          observerRef.current = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                setIsScrolledPast(entry.intersectionRatio < 0.01);
              });
            },
            {
              root: null,
              rootMargin: '0px',
              threshold: 0.01 // A small threshold to handle edge cases better
            }
          );

          observerRef.current.observe(targetElement);
        } else {
          console.error(`Element with ID ${targetId} not found, retrying...`);
          setTimeout(tryObserve, 500); // Retry after a delay
        }
      };

      tryObserve();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targetId, location.pathname]); // Also depend on the pathname to reinitialize when the route changes

  return isScrolledPast;
};

export default useScrollDetection;
