import React from "react";

import "../styles/refArea.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Autoplay, Pagination } from "swiper";

import logo2 from "../sources/logo-uludagg.jpg";
import logo3 from "../sources/emko.png";
import logo4 from "../sources/orhanhold.png";
import logo5 from "../sources/toksan.jpg";
import logo6 from "../sources/bkmimarlik.png";
import logo7 from "../sources/gisan.jpg";
import logo8 from "../sources/skt.png";
import logo9 from "../sources/yeo.png";

export default function () {
  return (
    <div className="main-div">
      <div className="head-main">
      <div className="header-sec">
          <h3 className="header-h3">REFERANSLARIMIZ</h3>
          <div className="divider"></div>
          <p className="header-p">
            Türkiye'nin her yerinden referanslarımızdan bazıları Arelya
            kalitesinin güvencesidir ve birlikte çalışmaktan mutluluk duyarız.
          </p>
      </div>
      </div>

      <div className="logos">
        <div className="logos-slide">
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
        </div>
        <div className="logos-slide">
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
        </div>
      </div>

    </div>
  );
}
