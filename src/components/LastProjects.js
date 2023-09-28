import React from "react";
import "../styles/lastProjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { useMediaQuery } from 'react-responsive';

import "swiper/css";
import "../styles/slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import  hayat1 from "../sources/last-projects/hayat-hastanesi/1.jpg"
import  hayat2 from "../sources/last-projects/hayat-hastanesi/2.jpg"
import  hayat3 from "../sources/last-projects/hayat-hastanesi/3.jpg"
import  hayat4 from "../sources/last-projects/hayat-hastanesi/4.jpg"

import  orhan1 from "../sources/last-projects/orhan-holding/1.jpg"
import  orhan2 from "../sources/last-projects/orhan-holding/2.jpg"
import  orhan3 from "../sources/last-projects/orhan-holding/3.jpg"
import  orhan4 from "../sources/last-projects/orhan-holding/4.jpg"

import  tekstil1 from "../sources/last-projects/tekstil-fabrikasi/1.jpg"
import  tekstil2 from "../sources/last-projects/tekstil-fabrikasi/2.jpg"
import  tekstil3 from "../sources/last-projects/tekstil-fabrikasi/3.jpg"
import  tekstil4 from "../sources/last-projects/tekstil-fabrikasi/4.jpg"
import  tekstil5 from "../sources/last-projects/tekstil-fabrikasi/5.jpg"
import  tekstil6 from "../sources/last-projects/tekstil-fabrikasi/6.jpg"


export default function () {
  const images = [
    [
      {src: hayat1},{src: hayat2},{src: hayat3},{src: hayat4},
    ],
    [
      {src: orhan1},{src: orhan2},{src: orhan3},{src: orhan4},
    ],

    [
      {src: tekstil1},{src: tekstil2},{src: tekstil3},{src: tekstil4},{src: tekstil5},{src: tekstil6},
    ]
  ];

  const isLargeScreen = useMediaQuery({ minWidth: 1200 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });
  
  let slidesPerView = 1;
  let spaceBetween = 20;

  if (isLargeScreen) {
    slidesPerView = 4;
    spaceBetween = 100;
  } else if (isMediumScreen) {
    slidesPerView = 3;
    spaceBetween = 75;
  } else {
    slidesPerView = 2;
    spaceBetween = 50;
  }

  const [open, setOpen] = React.useState([false, false, false, false, false]);

  const handleClick = (index) => {
    const updatedArray = [...open];
    updatedArray[index] = !updatedArray[index];
    setOpen(updatedArray);
  };

  return (
    <div className="last-projects-div">
      <div className="head-div">
        <h3 className="last-proj-h3">SON PROJELERİMİZDEN SEÇMELER</h3>
        <div style={{marginBottom:"10px"}} className="divider"></div>
      </div>
      <div className="last-projects-swiper">
      <Swiper
        
        simulateTouch={false}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        autoplay={{
          disableOnInteraction: true,
          autoplay: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={hayat2}></img>

              <button
                type="button"
                className="img-button"
                onClick={() => handleClick(0)}
              >
                GALERİ
              </button>
            </div>
            <div>
              <h4>Hayat Hastanesi</h4>
              <p>Hastane Danışma Alanı Zeminine Tarkett Exellence 80 Triange Wood Chalk imzası</p>
            </div>
            <Lightbox
              plugins={[Thumbnails]}
              open={open[0]}
              close={() => handleClick(0)}
              slides={images[0]}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={orhan4}></img>
              
                <button
                  type="button"
                  className="img-button"
                  onClick={() => handleClick(1)}
                >
                  GALERİ
                </button>
            </div>
            <div>
              <h4>Orhan Holding</h4>
              <p>Yemekhane Zeminine Tarkett Acczent Exellence 80 Terrazzo Terracotta imzası</p>
            </div>
            <Lightbox
                  plugins={[Thumbnails]}
                  open={open[1]}
                  close={() => handleClick(1)}
                  slides={images[1]}
                />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={tekstil3}></img>
              
                <button
                  type="button"
                  className="img-button"
                  onClick={() => handleClick(2)}
                >
                  GALERİ
                </button>
                
            </div>
            <div>
              <h4>Kızılırmak Tekstil</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
            <Lightbox
                  plugins={[Thumbnails]}
                  open={open[2]}
                  close={() => handleClick(2)}
                  slides={images[2]}
                />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
