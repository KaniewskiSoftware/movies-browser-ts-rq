/**
 * This file contains the types and data structures for handling image sizes and breakpoints
 * for images fetched from The Movie Database (TMDb) API.
 *
 * For more information on TMDb API image configuration, visit:
 * https://developers.themoviedb.org/3/configuration/get-api-configuration
 */

export type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export type ProfileSize = "w45" | "w185" | "h632" | "original";

export type BackdropSize = "w300" | "w780" | "w1280" | "original";

export type ImageType = "poster" | "profile" | "backdrop";

export interface ImageSizeMap {
  poster: PosterSize;
  profile: ProfileSize;
  backdrop: BackdropSize;
}

export interface ImageSize<T extends ImageType> {
  size: ImageSizeMap[T];
  width: number;
}

export const breakpoints: {
  [key in ImageType]: ImageSize<key>[];
} = {
  poster: [
    { size: "w154", width: 467 },
    { size: "w342", width: 767 },
    { size: "w500", width: Infinity },
  ],
  profile: [
    { size: "w185", width: 600 },
    { size: "h632", width: Infinity },
  ],
  backdrop: [
    { size: "w780", width: 767 },
    { size: "w1280", width: 1224 },
    { size: "original", width: Infinity },
  ],
};
