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
};
