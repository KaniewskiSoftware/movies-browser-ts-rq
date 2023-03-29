/**
 * Possible response types provided by the external API documentation.
 *
 * These interfaces represent the structure of response data objects returned by the API.
 * The properties within the interfaces are self-explanatory and follow
 * the naming conventions used by the external API documentation.
 */
export interface CastMember {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface CrewMember {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string;
  department?: string;
  job?: string;
}

export interface MovieCreditsResponse {
  id?: number;
  cast?: CastMember[];
  crew?: CrewMember[];
}
