import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./thunks";

const initialState = {
  model: [],
  isLoading: false,
  error: "",
  allDataLoaded: false,
};

const handleFetchCars = (state, { payload }) => {
  const newModel = [...state.model, ...payload];

  if (!payload?.length) {
    state.allDataLoaded = true;
  }

  state.isLoading = false;
  state.model = newModel;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarsModel: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, handleFetchCars)
      .addMatcher((action) => {
        return action.type.endsWith("/pending");
      }, handlePending)
      .addMatcher((action) => {
        return action.type.endsWith("/rejected");
      }, handleRejected);
  },
});

export const { clearCarsModel } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
