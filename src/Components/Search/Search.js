import React from "react";

const Search = ({ quary, setQuary }) => {
  return (
    <select value={quary} onChange={(e) => setQuary(e.target.value)}>
      <option value="all">All</option>
      <option value="electrical">Electrical</option>
      <option value="sedan">Sedan</option>
      <option value="sport">Sport</option>
    </select>
  );
};

export default Search;
