/**
 * Possible response types provided by the external API documentation.
 *
 * These interfaces represent the structure of response data objects returned by the API.
 * The properties within the interfaces are self-explanatory and follow
 * the naming conventions used by the external API documentation.
 */
export interface PersonDetailsResponse {
  birthday?: string | null;
  known_for_department?: string;
  deathday?: string | null;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: number; // default: 0; minimum: 0; maximum: 3
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string | null;
}
