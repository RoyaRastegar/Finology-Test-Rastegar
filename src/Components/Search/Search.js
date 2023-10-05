import React from "react";
import "./Search.css";
const Search = ({ quary, setQuary }) => {
  return (
    <div className="search ">
      <label>Search Car Type:</label>
      <select value={quary} onChange={(e) => setQuary(e.target.value)}>
        <option value="electrical">Electrical</option>
        <option value="sedan">Sedan</option>
        <option value="sport">Sport</option>
      </select>
    </div>
  );
};

export default Search;
