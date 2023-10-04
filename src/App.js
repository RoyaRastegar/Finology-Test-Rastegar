import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import GetCar from "./Components/GetCar/GetCar";
function App() {
  const [quary, setQuary] = useState("All");
  return (
    <div className="App">
      <Navbar>
        <Search quary={quary} setQuary={setQuary} />
      </Navbar>
      <GetCar quary={quary} />
    </div>
  );
}

export default App;
