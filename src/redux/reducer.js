import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { favoriteReducer } from "./favoriteSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "favoriteCars",
  storage,
  whitelist: ["favoriteCars"],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const reducer = combineReducers({
  cars: carsReducer,
  favorite: persistedReducer,
});
