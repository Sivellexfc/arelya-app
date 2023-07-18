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

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img1 from "../sources/zemin_is1.jpg";

export default function () {

  const images = [
    [{
      src: "https://img.freepik.com/premium-photo/number-0_2227-158.jpg?w=2000",
    }],
    [{
      src: "https://i.etsystatic.com/20341642/r/il/8be8cd/2572122727/il_fullxfull.2572122727_2qhg.jpg",
    }],

    [{
      src: "https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292993-stock-photo-the-number-2-in-gold.jpg",
    }],

    [{
      src: "https://media.istockphoto.com/id/939173414/tr/foto%C4%9Fraf/parlak-neon-yaz%C4%B1-tipi-say%C4%B1-3.jpg?s=612x612&w=0&k=20&c=3o42wbD3SNm5IhXDGvD1yhQ5pvI4VAAFJ7l9Ql4Qc2M=",
    }],

    [{
      src: "https://media.istockphoto.com/id/1040247010/photo/number-4-four-fourth-3d-green-sign-isolated.jpg?s=170667a&w=0&k=20&c=6Gdy5WOxnRqqKF7385zlHBMlhNyGfXuh7YYXjKZGKTk=",
    }]
  ];


  const [open, setOpen] = React.useState([false, false, false, false, false]);

  const handleClick = (index) => {
    console.log("aktif edildi :")
    console.log(index)
    const updatedArray = [...open];
    updatedArray[index] = !updatedArray[index];
    setOpen(updatedArray);
  };
  

  return (
    <div className="last-projects-div">
      <div className="head-div">
        <h3 className="last-proj-h3">SON PROJELERİMİZDEN SEÇMELER</h3>
        <div className="divider"></div>
      </div>
      <Swiper
        simulateTouch={false}
        spaceBetween={100}
        slidesPerView={4}
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
              <img className="imgg" src={img1}></img>
              <div className="img-button-div">
                <button type="button" className="img-button" onClick={() => handleClick(0)}>
                  GALERİ
                </button>
                <Lightbox
                  plugins={[Thumbnails]}
                  open={open[0]}
                  close={() => handleClick(0)}
                  slides={images[0]}
                />
              </div>
            </div>
            <div>
              <h4>0 Burulaş merkezi zemin kaplama</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={img1}></img>
              <div className="img-button-div">
              <button type="button" className="img-button" onClick={() => handleClick(1)}>
                  GALERİ
                </button>
                <Lightbox
                  plugins={[Thumbnails]}
                  open={open[1]}
                  close={() => handleClick(1)}
                  slides={images[1]}
                />
              </div>
            </div>
            <div>
              <h4>1 Burulaş merkezi zemin kaplama</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={img1}></img>
              <div className="img-button-div">
              <button type="button" className="img-button" onClick={() => handleClick(2)}>
                  GALERİ
                </button>
                <Lightbox
                  plugins={[Thumbnails]}
                  open={open[2]}
                  close={() => handleClick(2)}
                  slides={images[2]}
                />
              </div>
            </div>
            <div>
              <h4>2 Burulaş merkezi zemin kaplama</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={img1}></img>
              <div className="img-button-div">
              <button type="button" className="img-button" onClick={() => handleClick(3)}>
                  GALERİ
                </button>
                <Lightbox
                  plugins={[Thumbnails]}
                  open={open[3]}
                  close={() => handleClick(3)}
                  slides={images[3]}
                />
              </div>
            </div>
            <div>
              <h4>3 Burulaş merkezi zemin kaplama</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elemen-div">
            <div className="img-div">
              <img className="imgg" src={img1}></img>
              <div className="img-button-div">
              <button type="button" className="img-button" onClick={() => handleClick(4)}>
                  GALERİ
                </button>
                <Lightbox
                  plugins={[Thumbnails]}
                  open={open[4]}
                  close={() => handleClick(4)}
                  slides={images[4]}
                />
              </div>
            </div>
            <div>
              <h4>4 Burulaş merkezi zemin kaplama</h4>
              <p>Burulaş merkez binası zeminini kapladık</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
