import React from "react";
import { useSelector, useDispatch } from "react-redux";
import scss from "./CarsItem.module.scss";
import { getPartOfAdress, checkIsFavorite } from "../../utils/utils";
import { LikeIcon } from "../../../components/icons/LikeIcon";
import { addRemoveCar } from "../../../redux/favoriteSlice";
import Modal from "../../modal/Modal";

const CarsItem = (props) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address: fullAddress,
    rentalCompany,
    type,
    model: carModel,
    id,
    functionalities,
  } = props;
  const { favoriteCars, cars } = useSelector((state) => {
    return {
      cars: state.cars.model,
      favoriteCars: state.favorite.favoriteCars,
    };
  });
  const [, city, country] = getPartOfAdress(fullAddress);
  const dispatch = useDispatch();

  const handleClickLike = () => {
    const mappedCars = cars.length ? cars : favoriteCars;
    const favoriteCar = mappedCars.find((car) => car.id === id);
    dispatch(addRemoveCar(favoriteCar));
  };

  const isFavorite = checkIsFavorite(id, favoriteCars);

  return (
    <li className={scss.carsItem}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`${scss.carsItem__img} ${scss.isActive}`}
      ></div>
      <div className={scss.carsItem__wrapper}>
        <LikeIcon
          className={`${
            isFavorite ? scss.carsItem__icon_is_active : scss.carsItem__icon
          }`}
          onClick={handleClickLike}
        />
        <div className={scss.carsItem__info}>
          <div className={scss.carsItem__description}>
            <span>{make} </span>
            <span className={scss.carsItem__model}>{model}</span>
            <span>, {year}</span>
          </div>
          <div className={scss.carsItem__price}>
            <span>{rentalPrice}</span>
          </div>
        </div>
        <div className={scss.carsItem__tags}>
          <div>
            <span className={scss.carsItem__tag}>{city}</span>
            <span className={scss.carsItem__tag}>{country}</span>
            <span className={scss.carsItem__tag}>{rentalCompany}</span>
          </div>
          <div>
            <span className={scss.carsItem__tag}>{type}</span>
            <span className={scss.carsItem__tag}>{carModel}</span>
            <span className={scss.carsItem__tag}>{id}</span>

            {functionalities?.length && (
              <span className={scss.carsItem__tag}>{functionalities[0]}</span>
            )}
          </div>
        </div>
      </div>
      <Modal
        trigger={<button className={scss.carsItem__button}>Learn More</button>}
        {...props}
      />
    </li>
  );
};

export default CarsItem;
