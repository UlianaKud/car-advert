import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CarsItem from "../renderComponents/CarsItem/CarsItem";
import scss from "./Favorite.module.scss";

const Favorite = () => {
  const { favoriteCars } = useSelector((state) => {
    return {
      favoriteCars: state.favorite.favoriteCars,
    };
  });

  const renderCards = () => {
    if (!favoriteCars?.length) {
      return (
        <div className={scss.catalog__without_favorite}>
          You haven't selected your favorite cars
        </div>
      );
    }
    return (
      <ul>
        {favoriteCars.map((car) => {
          return <CarsItem key={car.id} {...car} />;
        })}
      </ul>
    );
  };
  return <div className={scss.catalog}>{renderCards()}</div>;
};

export default Favorite;
