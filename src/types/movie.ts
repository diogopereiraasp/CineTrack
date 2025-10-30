export type Movie = {
  id: number;
  title: string;
  original_title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  original_language: string;
  video: boolean;
  revenue: number;
};

export type MovieListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};