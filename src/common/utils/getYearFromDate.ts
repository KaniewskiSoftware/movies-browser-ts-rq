/**
 * Extracts the release year from a given release date string.
 *
 * @param releaseDate - A string representing the release date in the format "YYYY-MM-DD".
 * @returns A string representing the release year (YYYY).
 */
export const getYearFromReleaseDate = (releaseDate: string): string => {
    return releaseDate.slice(0, 4);
  };
  