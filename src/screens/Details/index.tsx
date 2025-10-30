import { ActivityIndicator, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { getMovieById } from '../../services/api/tmdb';

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
    FavoriteButton,
    FavoriteButtonText
} from './styles';
import { colors } from '../../styles/theme/colors';
import { Feather } from '@expo/vector-icons';
import { fontSizes } from '../../styles/theme/typography';

export default function Details() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDetails() {
            try {
                const data = await getMovieById(Number(id));
                console.log(data);
                setMovie(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchDetails();
    }, [id]);

    const year = movie?.release_date ? `${new Date(movie.release_date).getFullYear()}` : '';
    const img = movie?.backdrop_path
        ? `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`
        : undefined;

    if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;

    return (
        <Container>
            <PosterImage source={{ uri: img }} />

            <Body>
                <TitleMovie>{movie?.title}</TitleMovie>

                <Row>
                    <Feather name="star" size={fontSizes.label} color={colors.starIcon} />
                    <VoteAverage>{movie?.vote_average}</VoteAverage>
                    <Feather name="chevron-right" size={fontSizes.body} color={colors.primary} />
                    <ReleaseDate>{year}</ReleaseDate>
                </Row>

                <RowButton>
                    <FavoriteButton activeOpacity={0.7}>
                        <Feather name="heart" size={fontSizes.icon} color={colors.textPrimary} />
                        <FavoriteButtonText>Adicionar aos Favoritos</FavoriteButtonText>
                    </FavoriteButton>
                </RowButton>

                <Info>
                    <Genre>Genero(s): {movie?.genres.map(genre => genre.name).join(", ")}</Genre>
                    <OverView>Sinopse: {movie?.overview}</OverView>
                </Info>

                <Info>
                    <Revenue>Receita: {movie?.revenue ? `$${movie.revenue.toLocaleString()}` : 'N/A'}</Revenue>
                </Info>
            </Body>

        </Container>
    );
}