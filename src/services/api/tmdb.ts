import { Movie } from "../../types/movie";
import { api } from "./http";

export async function getTopRated(page: number = 1): Promise<{
    results: Movie[];
    page: number;
    totalPages: number;
}> {
    try {
        const { data } = await api.get(`/discover/movie`,
            {
                params: {
                    language: "pt-br",
                    page,
                    include_adult: false,
                    include_video: false,
                    sort_by: "vote_average.desc",
                    without_genres: "99,10755",
                    "vote_count.gte": 200
                }
            }
        );

        return { results: data.results, page: data.page, totalPages: data.total_pages };

    } catch (error) {
        console.error("Error ao buscar filmes (services/api/tmdb/getTopRated): ", error);
        throw error;
    }
}

export async function getMovieById(id: number): Promise<Movie> {
  try {
    const { data } = await api.get(`/movie/${id}`, {
      params: {
        language: 'pt-BR',
      },
    });

    return data as Movie;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme (services/api/tmdb/getMovieById):', error);
    throw error;
  }
}