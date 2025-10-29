// src/screens/Home/HomeScreen.tsx
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getTopRated } from '../../services/api/tmdb';
import type { Movie } from '../../types/movie';
import MovieCard from '../../components/MovieCard';
import { Container, SubTitle } from '../../styles/global';
import { Title } from './styles';
import Search from '../../components/Search';

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [initialized, setInitialized] = useState(false);

    async function fetchPage(nextPage: number, isRefresh = false) {
        if (loading) return;
        if (nextPage > totalPages && !isRefresh) return;

        setLoading(true);
        try {
            const { results, page: apiPage, totalPages: apiTotal } = await getTopRated(nextPage);
            setTotalPages(apiTotal);
            setPage(apiPage);

            setMovies((prev) => {
                const base = isRefresh ? [] : prev;
                const merged = [...base, ...results];
                const seen = new Set<number>();
                return merged.filter((m) => (seen.has(m.id) ? false : (seen.add(m.id), true)));
            });
        } catch (e) {
            console.error('Erro ao carregar filmes:', e);
        } finally {
            setLoading(false);
            if (isRefresh) setRefreshing(false);
        }
    }

    useEffect(() => {
        if (initialized) return;
        setInitialized(true);
        setRefreshing(true);
        fetchPage(1, true);
    }, []);

    const onEnd = () => {
        if (!loading && page < totalPages) fetchPage(page + 1);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchPage(1, true);
    };

    return (
        <Container>
            <Title>CineTrack</Title>

            {/* <Search /> */}

            <SubTitle>Melhores avaliados</SubTitle>

            <FlatList
                data={movies}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <MovieCard movie={item} />}
                onEndReached={onEnd}
                onEndReachedThreshold={0.5}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListFooterComponent={
                    loading && !refreshing ? <ActivityIndicator style={{ marginVertical: 12 }} /> : null
                }
            />
        </Container>
    );
}
