/**
 * Creates a debounced version of the provided function, ensuring that it is
 * only called once after a specified delay, regardless of how many times it
 * is called during that delay period.
 *
 * @param callback - The function to debounce.
 * @param delay - The time in milliseconds to wait before calling the debounced function.
 * @returns A debounced version of the provided function.
 *
 * Usage:
 * const debouncedFunc = debounce(originalFunc, 300);
 * debouncedFunc(args); // Calls `originalFunc` after a 300ms delay.
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
