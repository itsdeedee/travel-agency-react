import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Banner from "./component/Banner";
import Gallery from "./component/Gallery";
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
      <Gallery />
    </>
  );
}

export default App;
