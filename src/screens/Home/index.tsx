import { useEffect } from "react";
import { Text, View } from "react-native";
import { getTopRated } from "../../services/api/tmdb";

export default function Home() {

    useEffect(() => {
        console.log("api key", process.env.EXPO_PUBLIC_TMDB_API_KEY);
        // buscar filmes
        async function fetchMovies() {
            try {
                const movies = await getTopRated(1);
                console.log(movies);
            } catch (error) {
                console.error("Erro ao buscar filmes na tela Home: ", error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <View>
            <Text>Filmes</Text>
        </View>
    );
}