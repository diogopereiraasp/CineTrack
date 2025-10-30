import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/slices/favoritesSlice';
import { FlatList } from 'react-native';
import MovieCard from '../../components/MovieCard';
import { ButtonTrash, Container, Header, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../styles/theme/colors';
import { useRouter } from 'expo-router';

export default function FavoritesScreen() {

    const router = useRouter();
    const favorites = useSelector(selectFavorites);


    return (
        <Container>

            <Header>
                <Title>Meus Filmes Favoritos</Title>
                <ButtonTrash>
                    <Feather name="trash" size={26} color={colors.textPrimary} />
                </ButtonTrash>
            </Header>

            <FlatList
                data={favorites}
                keyExtractor={(i) => String(i.id)}
                renderItem={({ item }) => <MovieCard movie={item} onPress={() => router.push({ pathname: "details", params: { id: item.id } })} />}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={null}
            />

        </Container>
    );
}
