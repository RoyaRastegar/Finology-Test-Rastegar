import React from "react";

const Car = ({ car }) => {
  return (
    <div>
      <li>
        Type: {car.cartype} , Made: {car.carmade} , Color: {car.carcolor}
      </li>
    </div>
  );
};

export default Car;
