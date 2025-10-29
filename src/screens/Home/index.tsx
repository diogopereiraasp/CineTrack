import { useEffect, useState } from "react";
import { getTopRated } from "../../services/api/tmdb";
import { Container, SubTitle } from "../../styles/global";
import Search from "../../components/Search";
import { Title } from "./styles";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/movie";
import { FlatList } from "react-native";

export default function Home() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        // buscar filmes
        async function fetchMovies() {
            try {
                const list = await getTopRated(1);
                setMovies(list);
            } catch (error) {
                console.error("Erro ao buscar filmes na tela Home: ", error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <Container>
            <Title>CineTrack</Title>
            <Search />
            <SubTitle>Melhores Avaliados</SubTitle>
            <FlatList
                data={movies}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <MovieCard movie={item} />}
            />
        </Container>
    );
}