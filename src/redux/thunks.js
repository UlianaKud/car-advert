import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../api/getCars";

export const fetchCarsThunk = createAsyncThunk("advert/catalog", (searchParams) => {
  return fetchCars(searchParams);
});
