import React from "react";
import Car from "./Car";
const ListCar = ({ Cars }) => {
  return (
    <div className="list-car">
      {Cars.map((car, i) => (
        <ul>
          <Car key={car.id} car={car} />
        </ul>
      ))}
    </div>
  );
};

export default ListCar;
