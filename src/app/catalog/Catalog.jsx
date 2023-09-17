import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import scss from "./Catalog.module.scss";
import { fetchCarsThunk } from "../../redux/thunks";
import CarsItem from "../renderComponents/CarsItem/CarsItem";
import { Loader } from "semantic-ui-react";
import { clearCarsModel } from "../../redux/carsSlice";

const Catalog = () => {
  const { cars, isLoading, allDataLoaded } = useSelector((state) => ({
    cars: state.cars.model,
    isLoading: state.cars.isLoading,
    allDataLoaded: state.cars.allDataLoaded,
  }));
  const [pagination, setPagination] = useState({ page: 1, limit: 8 });
  const dispatch = useDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    return () => {
      dispatch(clearCarsModel());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchCarsThunk(pagination));
      setPagination({ page: pagination.page + 1, limit: pagination.limit });
    }
  }, [pagination, dispatch]);

  const renderCards = () => {
    return (
      <ul>
        {cars.map((car) => {
          return <CarsItem key={car.id} {...car} />;
        })}
      </ul>
    );
  };

  const renderLoadMoreButton = () => {
    if (allDataLoaded) {
      return;
    }

    return isLoading ? (
      <Loader className={scss.catalog__load_more} active inline="centered" />
    ) : (
      <button
        className={scss.catalog__load_more}
        disabled={isLoading}
        onClick={handleClickLoadMore}
      >
        Load more
      </button>
    );
  };

  const handleClickLoadMore = () => {
    dispatch(fetchCarsThunk(pagination));
    setPagination({ page: pagination.page + 1, limit: pagination.limit });
  };

  return (
    <div className={scss.catalog}>
      {!cars?.length ? (
        <Loader active inline="centered" />
      ) : (
        [renderCards(), renderLoadMoreButton()]
      )}
    </div>
  );
};

export default Catalog;
