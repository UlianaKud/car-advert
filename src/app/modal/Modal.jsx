import React from "react";
import "./ModalStyles.scss";
import scss from "./Modal.module.scss";
import {
  Button,
  Header,
  Icon,
  Modal as SemanticModal,
} from "semantic-ui-react";
import { getPartOfAdress, getPartsOfCOnditions } from "../utils/utils";

function Modal({
  trigger,
  img,
  make,
  model,
  year,
  rentalCompany,
  type,
  modal: carModel,
  engineSize,
  id,
  address: fullAddress,
  accessories,
  functionalities,
  fuelConsumption,
  description,
  rentalConditions,
  mileage,
  rentalPrice,
}) {
  const [open, setOpen] = React.useState(false);
  const [, city, country] = getPartOfAdress(fullAddress);
  const conditions = getPartsOfCOnditions(rentalConditions);
  const formattedMileage = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(mileage);

  const formatRentalPrice = (price = "") => {
    return parseInt(price.match(/\d+/));
  };

  return (
    <SemanticModal
      className={scss.modalCar}
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <SemanticModal.Content className={scss.modalCar__content}>
        <img src={img} />
        <div className={scss.carsItem__info}>
          <div className={scss.carsItem__description}>
            <span>{make} </span>
            <span className={scss.carsItem__model}>{model}</span>
            <span>, {year}</span>
          </div>
        </div>
        <div className={scss.carsItem__tags}>
          <div>
            <span className={scss.carsItem__tag}>{city}</span>
            <span className={scss.carsItem__tag}>{country}</span>
            <span className={scss.carsItem__tag}>{id}</span>
            <span className={scss.carsItem__tag}>{year}</span>
            <span className={scss.carsItem__tag}>{type}</span>
          </div>
          <div>
            <span className={scss.carsItem__tag}>
              Fuel Consumption: {fuelConsumption}
            </span>
            <span className={scss.carsItem__tag}>
              Engine Size: {engineSize}
            </span>
          </div>
        </div>
        <div className={scss.carsItem__car__description}>{description}</div>
        <div>
          <div className={scss.carsItem__car__acc_func_caption}>
            Accessories and functionalities:
          </div>
          <div className={scss.carsItem__tags}>
            <div>
              {accessories?.map((acc) => {
                return <span className={scss.carsItem__tag}>{acc}</span>;
              })}
            </div>
            <div>
              {functionalities?.map((func) => {
                return <span className={scss.carsItem__tag}>{func}</span>;
              })}
            </div>
          </div>
        </div>
        <div className={scss.carItem__rental_cond}>
          <div className={scss.carItem__rental_cond_caption}>
            Rental Conditions:
          </div>
          <div className={scss.carItem__tooltips}>
            {conditions?.map((cond) => {
              if (
                cond?.includes("Minimum age") &&
                parseInt(cond.match(/\d+/))
              ) {
                const [text, age] = cond.split(":");
                return (
                  <div className={scss.carItem__tooltip}>
                    <span>{text}: </span>
                    <span className={scss.carItem__tooltip_colored}>{age}</span>
                  </div>
                );
              }

              return <div className={scss.carItem__tooltip}>{cond}</div>;
            })}
            <div className={scss.carItem__tooltip}>
              Mileage:{" "}
              <span className={scss.carItem__tooltip_colored}>
                {formattedMileage}
              </span>
            </div>
            <div className={scss.carItem__tooltip}>
              Price:{" "}
              <span className={scss.carItem__tooltip_colored}>
                {formatRentalPrice(rentalPrice)}$
              </span>
            </div>
          </div>
        </div>
        <div className={scss.carItem__action_rent}>
          <a href="tel:+380730000000">Rental car</a>
        </div>
      </SemanticModal.Content>
    </SemanticModal>
  );
}

export default Modal;
