import { ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

import { Movie } from '@/interface/movie';
import { getMovieById } from '@/services/tmdb.services';

import {
  Container,
  PosterImage,
  TitleMovie,
  Row,
  Info,
  Genre,
  OverView,
  VoteAverage,
  ReleaseDate,
  Revenue,
  Body,
  RowButton,
} from './styles';
import { colors } from '@/styles/theme/colors';
import { Feather } from '@expo/vector-icons';
import { fontSizes } from '@/styles/theme/typography';
import FavoriteButton from '@/components/FavoriteButton';
import { getImageUrl } from '@/utils/tmdbImage';
import { TMDBImageSize } from '@/services/api/constants';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    try {
      const data = await getMovieById(Number(id));
      setMovie(data);
    } catch (err) {
      console.error('Erro ao buscar detalhes:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const year = movie?.release_date
    ? `${new Date(movie.release_date).getFullYear()}`
    : '';

  const img = getImageUrl(movie?.backdrop_path, TMDBImageSize.MEDIUM);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;

  return (
    <Container>
      <PosterImage source={{ uri: img }} />

      <Body>
        <TitleMovie>{movie?.title}</TitleMovie>

        <Row>
          <Feather name="star" size={fontSizes.label} color={colors.starIcon} />
          <VoteAverage>{movie?.vote_average}</VoteAverage>
          <Feather
            name="chevron-right"
            size={fontSizes.body}
            color={colors.primary}
          />
          <ReleaseDate>{year}</ReleaseDate>
        </Row>

        <RowButton>
          <FavoriteButton movie={movie!} />
        </RowButton>

        <Info>
          <Genre>
            Gênero(s): {movie?.genres.map((g) => g.name).join(', ')}
          </Genre>
          <OverView>Sinopse: {movie?.overview}</OverView>
        </Info>

        <Info>
          <Revenue>
            Receita:{' '}
            {movie?.revenue
              ? `$${movie.revenue.toLocaleString()}`
              : 'N/A'}
          </Revenue>
        </Info>
      </Body>
    </Container>
  );
}
