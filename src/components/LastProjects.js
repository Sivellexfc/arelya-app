import React from "react";
import "../styles/lastProjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "../sources/zemin1.jpg";
import "../styles/slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function () {
  return (
    <div className="last-projects-div">
        <div>
            <h3 className="last-proj-h3">
            SON PROJELERİMİZ
            </h3>
        </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        autoplay={{
          disableOnInteraction: true,
          autoplay: true,
          pauseOnMouseEnter: true,
        }}
        
        modules={[Navigation, Autoplay, Pagination]}
      >
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
        <SwiperSlide><div className="slide-elemen-div">
            </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
