import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "@/types";

interface FavoriteState {
  items: Product[];
}

const initialState: FavoriteState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((product) => product.id !== action.payload.id);
    },
    toggleItem: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItem, removeItem, toggleItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
