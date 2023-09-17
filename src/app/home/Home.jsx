import React from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import iconFaDollarSign from "../../images/fa-dollar-sign.svg";
import iconCreditCard from "../../images/fa-credit-card.svg";
import iconCoins from "../../images/fa-coins.svg";
import iconCar from "../../images/fa-car.svg";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalog");
  };
  return (
    <div className={scss.homeWrapper}>
      <div className={scss.homeWrapper__hero}>
        <div className={scss.homeWrapper__hero__container}>
          <h1>Search. Compare. Rent.</h1>
          <h2>Car rental at the best prices</h2>
          <button type="button" data-modal-open onClick={handleNavigate}>
            Find a car
          </button>
        </div>
      </div>
      <div className={scss.homeWrapper__advantages}>
        <div className={scss.homeWrapper__advantages__container}>
          <h2>Advantages of renting</h2>
          <ul>
            <li>
              <div className={scss.advantages__icon}>
                <img src={iconFaDollarSign} alt="dollar" />
              </div>
              <h3 className={scss.advantages__header}>
                Best price: up to 30% OFF
              </h3>
              <p className={scss.advantages__paragraph}>
                Get access to the best deals from global car rental companies,
                discounts of 30% and even more exclusive offers all year long.
              </p>
            </li>
            <li>
              <div className={scss.advantages__icon}>
                <img src={iconCreditCard} alt="Credit card" />
              </div>
              <h3 className={scss.advantages__header}>
                Bookings with up to 10% cashback
              </h3>
              <p className={scss.advantages__paragraph}>
                Place your reservation and earn cashback in your digital wallet
                to save on your next bookings while being able to edit your
                reservation at any time.
              </p>
            </li>
            <li>
              <div className={scss.advantages__icon}>
                <img src={iconCoins} alt="Coins" />
              </div>
              <h3 className={scss.advantages__header}>
                Compare the best prices
              </h3>
              <p className={scss.advantages__paragraph}>
                Compare prices from over 200 car rental companies across more
                than 7,000 cities and 20,000 service points.
              </p>
            </li>
            <li>
              <div className={scss.advantages__icon}>
                <img src={iconCar} alt="Car" />
              </div>
              <h3 className={scss.advantages__header}>
                Convenient and easy car rental
              </h3>
              <p className={scss.advantages__paragraph}>
                In addition to the speed and practicality of renting on
                Rentcars, you can alsocount on 7-days-a-week support from a
                specialized service team ready to help you whenever you need.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
