import axios from "axios";
import { generateUrl } from "./apiUtils";

export const fetchCars = async (searchParams) => {
  const url = generateUrl(
    "https://65031279a0f2c1f3faeb61b9.mockapi.io/advert",
    searchParams
  );

  const { data } = await axios.get(url);
  return data;
};
