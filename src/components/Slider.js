import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay,Pagination} from 'swiper';
import "swiper/css";
import '../sources/zemin1.jpg'
import "../styles/slider.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


import zemin1 from '../sources/zemin1.jpg'
import zemin2 from '../sources/zemin2.jpg'

export default function Slider() {
  return (
    <div className="slider-main-div">
      <Swiper spaceBetween={50} slidesPerView={1} navigation={false} autoplay={{disableOnInteraction: true,autoplay: true,pauseOnMouseEnter: true}} pagination={{ clickable: true }} modules={[Navigation,Autoplay,Pagination]}>
        <SwiperSlide>
          <div className="image relative">
            <img style={{ width: "100%" }} src={zemin1}></img>
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
            <img style={{ width: "100%" }} src={zemin2}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>SPOR VİNİL</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="image relative">
            <img style={{ width: "100%" }} src={zemin1}></img>
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
            <img style={{ width: "100%" }} src={zemin2}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>SPOR VİNİL</h2>
              <p>
                Spor zemin çok çeşitli aktivitelere ev sahipliği yapmak için tasarlanmış çok amaçlı vinil spor zemin kaplamasıdır.
              </p>
              <button>AYRINTILAR</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
