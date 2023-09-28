import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "../styles/slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
        navigation={true}
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
            <img className="slide-img-sli-one" style={{ width: "100%" }} src={slide1}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>HOMOJEN VİNİL</h2>
              <p>
                Homojen vinil zamana karşı koyan tarzların ve çok yönlü
                renkleriyle, kompakt ve homojen vinil zemin kapları, yoğun ve
                çok yoğun trafikli alanlar için idealdir.
              </p>
              <a href="/zemin-uygulamalari/homojen-vinil">
              <button>AYRINTILAR</button>
              </a>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="slide-img-sli-two" style={{ width: "100%" }} src={slide2}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>HETEROJEN VİNİL</h2>
              <p>
                Heterojen vinil zemin kaplamaları, sağlık, eğitim, mağazacılık, konaklama ve turizm gibi ticari uygulamalar için yaratıcı çözümler sunar.
              </p>
              <a href="/zemin-uygulamalari/heterojen-vinil">
              <button>AYRINTILAR</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="slide-img-sli-three" style={{ width: "100%" }} src={slide3}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>LÜKS VİNİL</h2>
              <p>
                Lüks vinil karolar mükemmel performans ve esnekliğin yanı sıra üstün tasarım görünümü sağlar.
              </p>
              <a href="/zemin-uygulamalari/luks-vinil-karo">
              <button>AYRINTILAR</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="slide-img-sli-four" style={{ width: "100%" }} src={slide4}></img>
            <div className="title-content">
              <h3>Asma Tavan</h3>
              <h2>PETEK ASMA TAVAN</h2>
              <p>
                Petek asma tavanlar, tavan üstü tesisatın monolitik ve dekoratif bir maske ile örtülmesine yardımcı olarak, asma tavan çözümlerine şık ve fonksiyonel çözüm sunar.
              </p>
              <a href="/tavan-uygulamalari/petek-asma-tavan">
              <button>AYRINTILAR</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="slide-img-sli-five" style={{ width: "100%" }} src={slide5}></img>
            <div className="title-content">
              <h3>Asma Tavan</h3>
              <h2>BAFFLE ASMA TAVAN</h2>
              <p>
                Baffle asma tavan sistemleri görsel olarak en modern ve konsept tasarımların vazgeçilmezidir. Diğer metal asma tavan sistemlerine göre daha estetik görünümler sunar.
              </p>
              
              <div className="ayr-button-div">
              <a href="/tavan-uygulamalari/baffle-asma-tavan">
              <button>AYRINTILAR</button>
              </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="slide-img-sli-six" style={{ width: "100%" }} src={slide6}></img>
            <div className="title-content">
              <h3>Zemin Kaplama</h3>
              <h2>KARO HALI</h2>
              <p>
                Bir çok desen ve renk çeşitliliği sunması, taşınabilir özelliği olması ve daha düşük maliyetiyle çeşitli ticari alanlarda sıkça tercih edilmektedir.
              </p>
              <a href="/zemin-uygulamalari/karo-hali">
              <button>AYRINTILAR</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
