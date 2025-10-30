import { Container, SubTitle, Title } from './styles';
import Search from '../../components/Search';
import MovieList from '../../components/MovieList';

export default function Home() {

    return (
        <Container>

            <Title>CineTrack</Title>
            {/* <Search /> */}
            <SubTitle>Melhores avaliados</SubTitle>
            <MovieList />

        </Container>
    );
}
