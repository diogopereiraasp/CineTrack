import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { Movie } from "@/interface/movie";
import { getTopRated } from "@/services/tmdb.services";
import MovieCard from "@/components/MovieCard";

export default function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [initialized, setInitialized] = useState(false);

    const router = useRouter();

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
        <>
            <FlatList
                data={movies}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <MovieCard movie={item} onPress={() => router.push({ pathname: "details", params: { id: item.id } })} />}
                onEndReached={onEnd}
                onEndReachedThreshold={0.5}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListFooterComponent={
                    loading && !refreshing ? <ActivityIndicator style={{ marginVertical: 12 }} /> : null
                }
            />
        </>
    )
}