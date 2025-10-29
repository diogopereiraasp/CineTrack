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

export default function MovieCard() {
    return (
        <Container>
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' }} />
            <Info>
                <TitleRow>
                    <Title numberOfLines={2}>Movie card Name</Title>
                    <ReleaseDate>(2023)</ReleaseDate>
                </TitleRow>
                <AverageRow>
                    <Feather name="star" size={14} color="#FFD700" />
                    <Average>8.5</Average>
                    <Votes>(17951 votos)</Votes>
                </AverageRow>
                <PopularityRow>
                    <Feather name="trending-up" size={12} color="#00FF00" />
                    <Popularity>54.848</Popularity>
                </PopularityRow>
            </Info>
        </Container>
    );
}