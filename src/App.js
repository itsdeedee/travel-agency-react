import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Banner from "./component/Banner";
import Deals from "./component/Deals";

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
      <Deals />
    </>
  );
}

export default App;
