import { ProductionCountry } from "../apiResponseTypes/movies/movieDetails";

export interface PropertyObject {
  title: string;
  content: string | Array<{ name: string; short?: string }>;
}

/**
 * A function that creates a PropertyObject based on the provided property value and property type.
 *
 * @function
 * @param {ProductionCountry[] | string | undefined} propertyValue - The value of the property.
 * @param {string} propertyType - The type of the property, e.g., "production_countries" or "release_date".
 * @returns {PropertyObject} - A PropertyObject with a title and content based on the provided property value and property type.
 *
 * @example
 * const productionCountries = [
 *   { iso_3166_1: 'IE', name: 'Ireland' },
 *   { iso_3166_1: 'US', name: 'United States of America' },
 * ];
 * const productionProperty = createPropertyObject(productionCountries, 'production_countries');
 *
 * @example
 * const releaseDate = '2023-02-22';
 * const releaseDateProperty = createPropertyObject(releaseDate, 'release_date');
 * @returns {PropertyObject} - A PropertyObject with a title and content based on the provided property value and property type.
 * If the property type is unknown or the property value is undefined, an empty PropertyObject with an empty title and content will be returned.
 */
export const createPropertyObject = (
  propertyValue: ProductionCountry[] | string | undefined,
  propertyType: string
): PropertyObject => {
  switch (propertyType) {
    case "production_countries":
      if (Array.isArray(propertyValue)) {
        return {
          title: "Production:",
          content: propertyValue.map((country: ProductionCountry) => ({
            name: country.name || "",
            short: country.iso_3166_1,
          })),
        };
      }
      break;
    case "release_date":
      if (typeof propertyValue === "string") {
        return {
          title: "Release date:",
          content: propertyValue,
        };
      }
      break;
    default:
      break;
  }
  return { title: "", content: "" }; // Return empty object for unknown property types or undefined property values
};
