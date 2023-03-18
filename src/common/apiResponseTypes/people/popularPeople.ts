interface KnownForMovie {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  original_title?: string;
  genre_ids?: number[];
  id?: number;
  media_type: "movies";
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

interface KnownForTV {
  poster_path?: string | null;
  popularity?: number;
  id?: number;
  overview?: string;
  backdrop_path?: string | null;
  vote_average?: number;
  media_type: "tv";
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}

type KnownFor = KnownForMovie | KnownForTV;

interface PeopleListResult {
  profile_path?: string;
  adult?: boolean;
  id?: number;
  known_for?: KnownFor[];
  name?: string;
  popularity?: number;
}

export interface PopularPeopleResponse {
  page?: number;
  results?: PeopleListResult[];
  total_results?: number;
  total_pages?: number;
}
