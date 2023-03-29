/**
 * Possible response types provided by the external API documentation.
 *
 * These interfaces represent the structure of response data objects returned by the API.
 * The properties within the interfaces are self-explanatory and follow
 * the naming conventions used by the external API documentation.
 */
export interface Genre {
  id?: number;
  name?: string;
}

export interface GenresResponse {
  genres?: Genre[];
}
