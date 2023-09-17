export const getPartOfAdress = (address = "") => address.split(",");

export const getPartsOfCOnditions = (conditions = "") => conditions.split("\n");

export const checkIsFavorite = (id, favoriteCars) =>
  favoriteCars.find((car) => car.id === id);
