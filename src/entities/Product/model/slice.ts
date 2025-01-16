/* eslint-disable no-param-reassign */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type FavoritesState } from './types';

const initialState: FavoritesState = {
  favorites: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<string>) {
      state.favorites[action.payload] = !state.favorites[action.payload];
    },
  },
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
