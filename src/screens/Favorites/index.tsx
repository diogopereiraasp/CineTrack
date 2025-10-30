import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites, clearFavorites } from '../../store/slices/favoritesSlice';
import { FlatList, Alert } from 'react-native';
import MovieCard from '../../components/MovieCard';
import { ButtonTrash, Container, EmptyIconContainer, EmptyState, EmptyText, Header, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../styles/theme/colors';
import { useRouter } from 'expo-router';

export default function FavoritesScreen() {
    const router = useRouter();
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    function handleClearAll() {
        if (!favorites.length) {
            Alert.alert('Favoritos', 'Sua lista já está vazia.');
            return;
        }

        Alert.alert(
            'Excluir todos?',
            'Tem certeza que deseja excluir toda a lista de favoritos?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(clearFavorites());
                        Alert.alert('Favoritos', 'A lista foi excluída.');
                    },
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <Container>
            <Header>
                <Title>Meus Filmes Favoritos</Title>
                <ButtonTrash onPress={handleClearAll} activeOpacity={0.7}>
                    <Feather name="trash" size={26} color={colors.textPrimary} />
                </ButtonTrash>
            </Header>

            <FlatList
                data={favorites}
                keyExtractor={(i) => String(i.id)}
                renderItem={({ item }) => (
                    <MovieCard
                        movie={item}
                        onPress={() =>
                            router.push({ pathname: '/details', params: { id: item.id } })
                        }
                    />
                )}
                contentContainerStyle={{
                    padding: 16,
                    flexGrow: 1,
                }}
                ListEmptyComponent={
                    <EmptyState>
                        <EmptyIconContainer>
                            <Feather name="heart" size={48} color={colors.textSecondary} />
                        </EmptyIconContainer>
                        <EmptyText>Você ainda não tem filmes favoritados.</EmptyText>
                    </EmptyState>
                }
            />
        </Container>
    );
}
