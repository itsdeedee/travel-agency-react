import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      <Services />
    </>
  );
}

export default App;
