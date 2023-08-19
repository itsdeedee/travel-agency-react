import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
