import { Feather } from "@expo/vector-icons";
import {
    Container,
    Image,
    Info,
    TitleRow,
    Title,
    ReleaseDate,
    AverageRow,
    Average,
    Votes,
    PopularityRow,
    Popularity
} from "./styles";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
};

export default function MovieCard({ movie }: Props) {

    const year = movie.release_date ? `(${new Date(movie.release_date).getFullYear()})` : '';
    const img = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : undefined;

    return (
        <Container>
            <Image source={{ uri: img }} />
            <Info>
                <TitleRow>
                    <Title numberOfLines={2}>{movie.title}</Title>
                    <ReleaseDate>{year}</ReleaseDate>
                </TitleRow>
                <AverageRow>
                    <Feather name="star" size={14} color="#FFD700" />
                    <Average>{movie.vote_average}</Average>
                    <Votes>({movie.vote_count} votos)</Votes>
                </AverageRow>
                <PopularityRow>
                    <Feather name="trending-up" size={12} color="#00FF00" />
                    <Popularity>{movie.popularity}</Popularity>
                </PopularityRow>
            </Info>
        </Container>
    );
}