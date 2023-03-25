interface Cast {
  character?: string;
  credit_id?: string;
  release_date?: string;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  vote_average?: number;
  title?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string | null;
  overview?: string;
  poster_path?: string | null;
}

/**
 * Possible response types provided by the external API documentation.
 *
 * These interfaces represent the structure of response data objects returned by the API.
 * The properties within the interfaces are self-explanatory and follow
 * the naming conventions used by the external API documentation.
 */
interface Crew {
  id?: number;
  department?: string;
  original_language?: string;
  original_title?: string;
  job?: string;
  overview?: string;
  vote_count?: number;
  video?: boolean;
  poster_path?: string | null;
  backdrop_path?: string | null;
  title?: string;
  popularity?: number;
  genre_ids?: number[];
  vote_average?: number;
  adult?: boolean;
  release_date?: string;
  credit_id?: string;
}

export interface PersonCreditsResponse {
  cast?: Cast[];
  crew?: Crew[];
  id?: number;
}
