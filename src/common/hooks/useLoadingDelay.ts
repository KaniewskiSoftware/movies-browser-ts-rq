import { useEffect, useState } from "react";

export const loadingDelay = 300;

export const useDelayLoading = (isLoading: boolean, delay: number): boolean => {
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setDelayedLoading(true);
    } else {
      const timer = setTimeout(() => {
        setDelayedLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isLoading, delay]);

  return delayedLoading;
};
