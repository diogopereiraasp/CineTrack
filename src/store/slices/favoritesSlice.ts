import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/types/movie';

type FavoritesState = Movie[];
const initialState: FavoritesState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        clearFavorites() {
            return [];
        },
        toggleFavorite(state, action: PayloadAction<Movie>) {
            const idx = state.findIndex(m => m.id === action.payload.id);
            if (idx >= 0) state.splice(idx, 1);
            else state.push(action.payload);
        },
    },
});

export const { clearFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

// Selectors
export const selectFavorites = (state: any) => state.favorites as Movie[];
export const selectIsFavorite = (id: number) => (state: any) =>
    (state.favorites as Movie[]).some(m => m.id === id);
