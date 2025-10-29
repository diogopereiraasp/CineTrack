import { Feather } from "@expo/vector-icons";
import {
    Container,
    Image,
    Info,
    Row,
    Title,
    ReleaseDate,
    Average,
    Votes,
    Popularity
} from "./styles";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
    onPress?: () => void;
};

export default function MovieCard({ movie, onPress }: Props) {

    const year = movie.release_date ? `(${new Date(movie.release_date).getFullYear()})` : '';
    const img = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : undefined;

    return (
        <Container onPress={onPress} activeOpacity={0.8}>
            <Image source={{ uri: img }} />
            <Info>
                <Row>
                    <Title numberOfLines={2}>{movie.title}</Title>
                    <ReleaseDate>{year}</ReleaseDate>
                </Row>
                <Row>
                    <Feather name="star" size={14} color="#FFD700" />
                    <Average>{movie.vote_average}</Average>
                    <Votes>({movie.vote_count} votos)</Votes>
                </Row>
                <Row>
                    <Feather name="trending-up" size={12} color="#00FF00" />
                    <Popularity>{movie.popularity}</Popularity>
                </Row>
            </Info>
        </Container>
    );
}