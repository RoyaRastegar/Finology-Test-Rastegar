import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import GetCar from "./Components/GetCar/GetCar";
import ListCar from "./Components/GetCar/ListCar";
// import { Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SearchRezult from "./Components/SearchRezult/SearchRezult";

function App() {
  const [quary, setQuary] = useState("All");
  const [Cars, setCars] = useState([]);

  return (
    <div className="App">
      <Navbar>
        <Search quary={quary} setQuary={setQuary} />
      </Navbar>
      <GetCar quary={quary} Cars={Cars} setCars={setCars} />
      <ListCar Cars={Cars} />
      <SearchRezult Cars={Cars} quary={quary} />
    </div>
  );
}

export default App;
