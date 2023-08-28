import {createSlice} from '@reduxjs/toolkit';
import FavouritesSliceState from '../interfaces/favourites-slice-state';

const initialState: FavouritesSliceState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const newItem = action.payload;
      const isAlreadyAdded = state.items.some(ele => ele.id === newItem.id);

      if (!isAlreadyAdded) {
        state.items.push(newItem);
      }
    },
    removeFromFavorite(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(ele => ele.id !== idToRemove);
    },
  },
});

export default favoriteSlice;
export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
