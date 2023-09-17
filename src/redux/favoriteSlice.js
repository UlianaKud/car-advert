import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addRemoveCar: (state, action) => {
      const isCarAlreadyInFavorite = state.favoriteCars.find(
        (car) => car.id === action.payload.id
      );
      if (isCarAlreadyInFavorite) {
        state.favoriteCars = state.favoriteCars.filter(
          (car) => car.id !== action.payload.id
        );
      } else {
        state.favoriteCars.push(action.payload);
      }
    },
  },
});

export const { addRemoveCar } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
