import { ProductionCountry } from "../api/types/movies/movieDetails";

export interface PropertyObject {
  title: string;
  content: string | Array<{ name: string; short?: string }>;
}

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

  return { title: "", content: "" };
};
