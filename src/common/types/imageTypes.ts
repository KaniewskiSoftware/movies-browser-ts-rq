/** All available sizes for each image type from extarnal tmdb source.
You can find out more here:
https://developers.themoviedb.org/3/configuration/get-api-configuration. */

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
