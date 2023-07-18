import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "../sources/zemin1.jpg";
import "../styles/slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slide1 from "../sources/homojen-vinil-slider.jpg";
import slide2 from "../sources/heterojen-vinil-slider.png";
import slide3 from "../sources/luks-vinil-slider.png";
import slide4 from "../sources/petek-asma-tavan-1.png";
import slide5 from "../sources/baffle-asma-tavan.png";
import slide6 from "../sources/karo-hali-slider.png";

export default function Slider() {
  return (
    <div className="slider-main-div">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        autoplay={{
          disableOnInteraction: true,
          autoplay: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide1}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>HOMOJEN VİNİL</h2>
              <p>
                Homojen vinil zamana karşı koyan tarzların ve çok yönlü
                renkleriyle, kompakt ve homojen vinil zemin kapları, yoğun ve
                çok yoğun trafikli alanlar.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide2}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>HETEROJEN VİNİL</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için
                tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide3}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>LÜKS VİNİL</h2>
              <p>
                Homojen vinil zamana karşı koyan tarzların ve çok yönlü
                renkleriyle, kompakt ve homojen vinil zemin kapları, yoğun ve
                çok yoğun trafikli alanlar.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide4}></img>
            <div className="title-content">
              <h3>Asma Tavan</h3>
              <h2>PETEK ASMA TAVAN</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için
                tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide5}></img>
            <div className="title-content">
              <h3>Asma Tavan</h3>
              <h2>BAFFLE ASMA TAVAN</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için
                tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={slide6}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>KARO HALI</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için
                tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
