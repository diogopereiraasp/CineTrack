import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/movie';

type FavoritesState = Movie[];
const initialState: FavoritesState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<Movie>) {
            const exists = state.some(m => m.id === action.payload.id);
            if (!exists) state.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<number>) {
            return state.filter(m => m.id !== action.payload);
        },
        clearFavorites() {
            return [];
        },
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

// Selectors
export const selectFavorites = (state: any) => state.favorites as Movie[];
export const selectIsFavorite = (id: number) => (state: any) =>
    (state.favorites as Movie[]).some(m => m.id === id);
