import React from "react";

const Car = ({ car }) => {
  return (
    <div>
      <li>
        type: {car.cartype} color:{car.carcolor} id:{car.id}
      </li>
    </div>
  );
};

export default Car;
