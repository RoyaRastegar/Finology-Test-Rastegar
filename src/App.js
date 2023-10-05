import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import GetCar from "./Components/GetCar/GetCar";
import ListCar from "./Components/GetCar/ListCar";
// import { Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SearchRezult from "./Components/SearchRezult/SearchRezult";

function App() {
  const [quary, setQuary] = useState("electrical");
  const [Cars, setCars] = useState([]);

  return (
    <div className="App">
      <Navbar>
        <Search quary={quary} setQuary={setQuary} />
      </Navbar>

      <h2>
        Get Car Information{" "}
        <GetCar quary={quary} Cars={Cars} setCars={setCars} />
      </h2>
      <h2>
        List Car
        <ListCar Cars={Cars} />
      </h2>
      <h2>
        Search result <SearchRezult Cars={Cars} quary={quary} />
      </h2>
    </div>
  );
}

export default App;
