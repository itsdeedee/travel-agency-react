import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Banner from "./component/Banner";
import Deals from "./component/Deals";
import ProductImagesSlider from "./component/Gallery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Testimonials from "./component/Testimonials";

import "./App.css";

const productImages = [
  require("./images/img2.jpg"),
  require("./images/img3.jpg"),
  require("./images/img4.jpg"),
  require("./images/img5.jpg"),
  require("./images/img6.jpg"),
  require("./images/img7.jpg"),
  require("./images/img8.jpg"),
  require("./images/img9.jpg"),
  require("./images/img10.jpg"),
];

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
      <ProductImagesSlider images={productImages} />
      <Testimonials />
    </>
  );
}

export default App;
