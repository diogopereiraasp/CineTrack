import { useEffect } from "react";
import { getTopRated } from "../../services/api/tmdb";
import { Container, SubTitle } from "../../styles/global";
import Search from "../../components/Search";
import { Title } from "./styles";
import MovieCard from "../../components/MovieCard";

export default function Home() {

    useEffect(() => {
        // buscar filmes
        async function fetchMovies() {
            try {
                const movies = await getTopRated(1);
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
            <SubTitle>Em alta</SubTitle>
            <MovieCard />
        </Container >
    );
}