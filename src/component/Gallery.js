import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "../Gallery.css";

const Gallery = (props) => {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div
      style={{
        height: "620px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1AA71A",
        marginTop: "250px",
        marginLeft: "-10px",
        marginRight: "-5px",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "700px",
          padding: "20px",
        }}
      >
        <div className="head3">GALLERY</div>
        <Swiper
          Loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
          style={{ marginTop: "20px" }}
        >
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="Slider Images" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          Loop={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="product-images-slider-thumbs"
          style={{ marginTop: "-100px" }}
        >
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt="Slider Images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
Gallery.propTypes = { images: PropTypes.array.isRequired };

export default Gallery;
