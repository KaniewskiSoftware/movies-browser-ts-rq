import { ProductionCountry } from "../apiResponseTypes/movies/movieDetails";

export interface PropertyObject {
  title: string;
  content: string | Array<{ name: string; short?: string }>;
}

/**
 * A function that creates a PropertyObject based on the provided property title and value.
 *
 * @function
 * @param {string} propertyTitle - The title of the property.
 * @param {ProductionCountry[] | string | undefined | null} propertyValue - The value of the property.
 * @returns {PropertyObject} - A PropertyObject with a title and content based on the provided property title and value.
 * If the property value is undefined or null, an empty PropertyObject with an empty title and content will be returned.
 *
 * @example
 * const productionCountries = [
 *   { iso_3166_1: 'IE', name: 'Ireland' },
 *   { iso_3166_1: 'US', name: 'United States of America' },
 * ];
 * const productionProperty = createPropertyObject('Production:', productionCountries);
 *
 * @example
 * const releaseDate = '2023-02-22';
 * const releaseDateProperty = createPropertyObject('Release date:', releaseDate);
 */
export const createPropertyObject = (
  propertyTitle: string,
  propertyValue: ProductionCountry[] | string | undefined | null
): PropertyObject => {
  if (Array.isArray(propertyValue)) {
    return {
      title: propertyTitle,
      content: propertyValue.map(({ name = "", iso_3166_1: short }) => ({
        name,
        short,
      })),
    };
  } else if (typeof propertyValue === "string") {
    return {
      title: propertyTitle,
      content: propertyValue,
    };
  }

  return { title: "", content: "" }; // Return empty object for unknown property types or undefined/null property values
};
