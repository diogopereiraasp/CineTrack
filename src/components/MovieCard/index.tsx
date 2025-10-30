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
import { Movie } from "@/interface/movie";
import { colors } from "@/styles/theme/colors";
import { fontSizes } from "@/styles/theme/typography";
import { TMDBImageSize } from "@/services/api/constants";
import { getImageUrl } from "@/utils/tmdbImage";

type Props = {
    movie: Movie;
    onPress?: () => void;
};

export default function MovieCard({ movie, onPress }: Props) {

    const year = movie.release_date ? `(${new Date(movie.release_date).getFullYear()})` : '';
    const img = getImageUrl(movie?.backdrop_path, TMDBImageSize.MEDIUM);

    return (
        <Container onPress={onPress} activeOpacity={0.8}>
            <Image source={{ uri: img }} />
            <Info>
                <Row>
                    <Title numberOfLines={2}>{movie.title}</Title>
                    <ReleaseDate>{year}</ReleaseDate>
                </Row>
                <Row>
                    <Feather name="star" size={fontSizes.smallIcon} color={colors.starIcon} />
                    <Average>{movie.vote_average}</Average>
                    <Votes>({movie.vote_count} votos)</Votes>
                </Row>
                <Row>
                    <Feather name="trending-up" size={fontSizes.smallIcon} color={colors.trendingIcon} />
                    <Popularity>{movie.popularity}</Popularity>
                </Row>
            </Info>
        </Container>
    );
}