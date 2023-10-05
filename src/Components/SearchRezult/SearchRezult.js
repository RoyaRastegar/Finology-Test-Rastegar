import React from "react";
import "./Searchrezult.css";
const SearchRezult = ({ Cars, quary }) => {
  const searchRezult = Cars.filter((car) => car.cartype === quary);

  return (
    <div className="search-rezult">
      <ul>
        {searchRezult.map((reasult) => (
          <div>
            <li>
              Type: {reasult.cartype} , Made: {reasult.carmade} , Color:
              {reasult.carcolor}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchRezult;
