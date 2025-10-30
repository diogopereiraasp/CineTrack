import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectIsFavorite } from '@/store/slices/favoritesSlice';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/typography';

import { FavoriteButtonText, Button } from './styles';
import { Movie } from '@/interface/movie';

type Props = {
    movie: Movie;
};

export default function FavoriteButton({ movie }: Props) {

    const dispatch = useDispatch();
    const isFav = useSelector(selectIsFavorite(movie?.id ?? -1));

    return (
        <Button
            activeOpacity={0.7}
            onPress={() => movie && dispatch(toggleFavorite(movie))}
            style={{
                backgroundColor: isFav ? colors.surface : colors.primary,
            }}
        >
            <Feather
                name={isFav ? 'heart' : 'heart'}
                size={fontSizes.icon}
                color={colors.textPrimary}
            />
            <FavoriteButtonText>
                {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </FavoriteButtonText>
        </Button>
    )
}