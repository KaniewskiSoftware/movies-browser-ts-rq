import { useEffect, useState } from "react";

// Loading delay time in miliseconds
export const loadingDelay = 300;

/**
 * A custom hook that adds a delay before changing the loading state to false.
 *
 * @param isLoading - The original loading state.
 * @param delay - The delay in milliseconds before the loading state changes to false.
 * @returns A new loading state with the delay applied.
 */
export const useDelayLoading = (isLoading: boolean, delay: number): boolean => {
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setDelayedLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isLoading, delay]);

  return delayedLoading;
};
