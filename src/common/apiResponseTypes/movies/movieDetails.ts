import { Genre } from "../genres/genres";

/**
 * Possible response types provided by the external API documentation.
 *
 * These interfaces represent the structure of response data objects returned by the API.
 * The properties within the interfaces are self-explanatory and follow
 * the naming conventions used by the external API documentation.
 */
interface BelongsToCollection {
  id?: number;
  name?: string;
}

interface ProductionCompany {
  name?: string;
  id?: number;
  logo_path?: string | null;
  origin_country?: string;
}

interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

interface SpokenLanguage {
  iso_639_1?: string;
  name?: string;
}

type MovieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";

export interface MovieDetailsResponse {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | BelongsToCollection;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguage[];
  status?: MovieStatus;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
