export const apiLink = "https://api.themoviedb.org/3";
export const apiLanguage = "en";
export const apiKey = "ed894dc65acf23e1be4175dbf123bd10";

const commonEndpoints = {
  movie: "/movie",
  person: "/person",
};

const commonqueryKeys = {
  movies: "movies",
  people: "people",
};

type EndpointFunction = (id: string) => string;

type EndpointConfiguration = {
  endpoint: string | EndpointFunction;
  queryKey: string;
};

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
