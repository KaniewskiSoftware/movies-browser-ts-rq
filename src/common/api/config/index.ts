/**
 * Configuration parameters for accessing the external API.
 *
 * `apiLink`: The base URL of the external API (The Movie Database API).
 * `apiLanguage`: The language parameter for the API requests, which defaults to "en" (English).
 * `apiKey`: The API key required to authenticate requests to the API.
 */
export const apiLink = "https://api.themoviedb.org/3";
export const apiLanguage = "en";
export const apiKey = "ed894dc65acf23e1be4175dbf123bd10";

/**
 * `commonEndpoints` is an object containing the base parts of
 * the API endpoints related to movies and people. These parts
 * are frequently used in the construction of various endpoints.
 *
 * `movie`: The base endpoint for movie-related API requests.
 * `person`: The base endpoint for person-related API requests.
 */
const commonEndpoints = {
  movie: "/movie",
  person: "/person",
};

/**
 * `commonqueryKeys` is an object containing the common cache keys
 * used in the `apiConfig` object. These keys are used to store
 * and access cached data for frequently used queries.
 *
 * `movies`: The cache key used for movie-related queries.
 * `people`: The cache key used for person-related queries.
 */
const commonqueryKeys = {
  movies: "movies",
  people: "people",
};

type EndpointFunction = (id: string) => string;

type EndpointConfiguration = {
  endpoint: string | EndpointFunction;
  queryKey: string;
};

/**
 * `apiConfig` is an object containing a collection of endpoint configurations.
 * Each configuration consists of an `endpoint` and a `queryKey`. The `endpoint`
 * can either be a string or a function that takes an `id` parameter and returns
 * a string. The `queryKey` is a string that represents the cache key used in
 * React Query for caching the data.
 *
 * The following endpoint configurations are available:
 *
 * - movies: The popular movies endpoint.
 * - searchMovies: The movie search endpoint.
 * - movieDetails: The movie details endpoint, taking an `id` parameter.
 * - movieCredits: The movie credits endpoint, taking an `id` parameter.
 * - genres: The movie genres list endpoint.
 * - people: The popular people endpoint.
 * - searchPeople: The people search endpoint.
 * - personCredits: The person movie credits endpoint, taking an `id` parameter.
 * - personDetails: The person details endpoint, taking an `id` parameter.
 */
export const apiConfig: Record<string, EndpointConfiguration> = {
  movies: {
    endpoint: `${commonEndpoints.movie}/popular`,
    queryKey: commonqueryKeys.movies,
  },
  searchMovies: {
    endpoint: `/search${commonEndpoints.movie}`,
    queryKey: commonqueryKeys.movies,
  },
  movieDetails: {
    endpoint: (id: string) => `${commonEndpoints.movie}/${id}`,
    queryKey: "movieDetails",
  },
  movieCredits: {
    endpoint: (id: string) => `${commonEndpoints.movie}/${id}/credits`,
    queryKey: "movieCredits",
  },
  genres: {
    endpoint: "/genre/movie/list",
    queryKey: "genres",
  },
  people: {
    endpoint: `${commonEndpoints.person}/popular`,
    queryKey: commonqueryKeys.people,
  },
  searchPeople: {
    endpoint: `/search${commonEndpoints.person}`,
    queryKey: commonqueryKeys.people,
  },
  personCredits: {
    endpoint: (id: string) => `${commonEndpoints.person}/${id}/movie_credits`,
    queryKey: "personCredits",
  },
  personDetails: {
    endpoint: (id: string) => `${commonEndpoints.person}/${id}`,
    queryKey: "personDetails",
  },
};
