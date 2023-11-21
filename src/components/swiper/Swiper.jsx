// import React, { useRef, useState } from "react";
import rasm1 from "./images/1694261957-1694018328-1600х491 (2) (1).jpg";
import rasm2 from "./images/1697264562-1600x491 uz copy.png";
import rasm3 from "./images/1698244324-2 uzb (1).jpg";
import rasm4 from "./images/1699607978-Монтажная область 5.jpg";
import rasm5 from "./images/image_2023-09-23_14-49-32.png";
import "./Swiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

let carouselData = [rasm1, rasm2, rasm3, rasm4, rasm5];

const MyCarousel = () => {
  return (
    <div >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData.map((i) => (
          <SwiperSlide>
            <img src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;
