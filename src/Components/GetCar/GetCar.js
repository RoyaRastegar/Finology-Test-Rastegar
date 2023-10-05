import React, { useState } from "react";
import "./GetCar.css";
const GetCar = ({ Cars, setCars }) => {
  const [carType, setCarType] = useState("");
  const [carMade, setCarMade] = useState("");
  const [carColor, setCarColor] = useState("white");

  function handelCarTypeChange(e) {
    setCarType(e.target.value);
  }
  function handelCarMadeChange(e) {
    setCarMade(e.target.value);
  }
  function handelCarColorChange(e) {
    setCarColor(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    setCars([
      ...Cars,
      {
        cartype: carType,
        carmade: carMade,
        carcolor: carColor,
        id: Math.random() * 1000,
      },
    ]);

    setCarColor("");
    setCarMade("");
    setCarType("");
  }
  return (
    <div className="getcar">
      <form onSubmit={handelSubmit}>
        <div>
          <label>Car Type:</label>
          <input
            type="radio"
            name="cartype"
            value="electrical"
            checked={carType === "electrical"}
            onChange={handelCarTypeChange}
          />
          Electrical
          <input
            type="radio"
            name="cartype"
            value="sport"
            checked={carType === "sport"}
            onChange={handelCarTypeChange}
          />
          Sport
          <input
            type="radio"
            name="cartype"
            value="sedan"
            checked={carType === "sedan"}
            onChange={handelCarTypeChange}
          />
          Sedan
        </div>
        <div>
          <label>Made:</label>
          <input
            type="radio"
            name="made"
            value="bmw"
            checked={carMade === "bmw"}
            onChange={handelCarMadeChange}
          />
          BMW
          <input
            type="radio"
            name="made"
            value="benz"
            checked={carMade === "benz"}
            onChange={handelCarMadeChange}
          />
          Benz
          <input
            type="radio"
            name="made"
            value="toyota"
            checked={carMade === "toyota"}
            onChange={handelCarMadeChange}
          />
          Toyota
        </div>
        <div>
          <label>Color:</label>
          <select name="color" value={carColor} onChange={handelCarColorChange}>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <button onSubmit={handelSubmit}>add New Car</button>
      </form>
    </div>
  );
};

export default GetCar;
