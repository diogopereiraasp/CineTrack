import { Feather } from '@expo/vector-icons';
import { EmptyContainer, EmptyIcon, EmptyText } from '../MovieScreen/styles';
import { Container, SubTitle, Title } from './styles';
import MovieList from '@/components/MovieList';
import { colors } from '@/styles/theme/colors';
import { useNetInfo } from '@react-native-community/netinfo';

export default function HomeScreen() {

    const netInfo = useNetInfo();
    const isOffline = netInfo.isConnected === false;

    return (
        <Container>

            <Title>CineTrack</Title>
            <SubTitle>Melhores avaliados</SubTitle>

            {isOffline ? (
                <EmptyContainer>
                    <EmptyIcon>
                        <Feather name="wifi-off" size={64} color={colors.textSecondary} />
                    </EmptyIcon>
                    <EmptyText>
                        Sem conexão com a internet.
                        Verifique sua rede e tente novamente.
                    </EmptyText>
                </EmptyContainer>
            ) : (
                <MovieList />
            )}

        </Container>
    );
}
