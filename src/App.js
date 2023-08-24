import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Banner from "./component/Banner";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      <Services />
      <Banner />
    </>
  );
}

export default App;
