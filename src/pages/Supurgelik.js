import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";
import {AiOutlineArrowRight} from "react-icons/ai"
import image_1 from "../sources/supurgelik/image-021.png";
import image_2 from "../sources/supurgelik/image-022.png";
import image_3 from "../sources/supurgelik/image-023.png";
import image_4 from "../sources/supurgelik/image-024.png";
import image_5 from "../sources/supurgelik/image-094.jpg";
import RefArea from "../components/RefArea";

export default function () {
  return (
    <div>
      <TopFooter></TopFooter>
      <DropdownNavbar></DropdownNavbar>
      <div className="main">
        <div className="header-product">
          <div className="header-product-head">
            <h4>ZEMİN ÇÖZÜMLERİMİZ</h4>
            <div className="divider"></div>
          </div>
        </div>
        <div className="about-product">
          <div className="about-product-div">
            <div className="button-section">
            <a href="/zemin-uygulamalari/homojen-vinil">
                <button className="button-pro">HOMOJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/heterojen-vinil">
                <button className="button-pro">
                  HETEROJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/zemin-uygulamalari/spor-vinil">
                <button className="button-pro">SPOR VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/kondaktif-vinil">
                <button className="button-pro">KONDAKTİF VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/luks-vinil-karo">
                <button className="button-pro">LÜKS VİNİL KARO<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/aluminyum-supurgelik">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>ALÜMİNYUM SÜPÜRGELİK<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/karo-hali">
                <button className="button-pro">KARO HALI<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/zemin-uygulamalari/yukseltilmis-doseme-sistemleri">
                <button className="button-pro">YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/baffle-asma-tavan">
                <button className="button-pro">BAFFLE ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/petek-asma-tavan">
                <button className="button-pro">PETEK ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
              <a href="/tavan-uygulamalari/mesh-asma-tavan">
                <button className="button-pro">MESH ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
              </a>
            </div>

            <div className="right-section">
              <div className="top-description-section">
                <div className="top-area-div">
                  <div className="top-image-div">
                    <img src={image_1}></img>
                    <img src={image_2}></img>
                  </div>
                  <div className="main-description">
                    <h3>ALÜMİNYUM SÜPÜRGELİK</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Alüminyum süpürgelik nedir?</strong> Alüminyum
                      süpürgelik profilleri oldukça sağlam ve darbelere karşı
                      dayanıklıdır. Çarpmalar ve sürtünmelerden oluşabilecek
                      hasarlara karşı duvar yüzeyini korumaktadır.
                    </p>
                    <p>
                      Alüminyum Süpürgelik Profilleri zemin ve duvar birleşim
                      yerlerindeki açıklığı kapatarak mekanlarınıza bütünlük ve
                      prestij kazandırır
                    </p>
                    <p>
                      Ticari mekanların vazgeçilmezi alüminyum süpürgelik
                      sağlamlığı estetiği ve granitten halıya hemen hemen bütün
                      zemin malzemeleriyle kullanılması yüksek tercih
                      sebeplerinden biridir.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div style={{marginBottom:"30px"}} className="divider"></div>
                    <p>
                      <strong>Montaj kolaylığı</strong> Alüminyum süpürgelikler,
                      kolay monte edilebilir ve yerleştirilebilir. Genellikle
                      vidalar veya yapıştırıcılar ile zemine sabitlenir. Montaj
                      süreci hızlı ve pratik bir şekilde gerçekleştirilebilir.
                    </p>
                    <p>
                      <strong>Kolay Bakım</strong> Alüminyum süpürgelikler,
                      kolay temizlenebilir özelliklere sahiptir. Sıvı ve kir
                      tutmaz özellikleri sayesinde basit bir silme işlemi ile
                      temizlenebilir. Bu da kullanım kolaylığı sağlar.
                    </p>
                    <p>
                      <strong>Dayanıklılık</strong> Alüminyum malzeme, dayanıklı
                      ve uzun ömürlü bir yapıya sahiptir. Çizilmelere, darbelere
                      ve aşınmalara karşı dirençlidir. Bu sayede uzun süre
                      boyunca kullanılabilir ve estetik özelliklerini korur.
                    </p>
                    <p>
                      <strong>Estetik görünüm</strong> Alüminyum süpürgelikler,
                      şık ve modern bir görünüm sunar. Farklı renk ve desen
                      seçenekleriyle zeminle uyumlu bir şekilde kullanılabilir.
                      İç mekanlara zarif bir dokunuş katar.
                    </p>
                  </div>
                  <div className="bottom-images">
                    <img src={image_3}></img>
                    <img src={image_4}></img>
                    <img src={image_5}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RefArea></RefArea>
      <Footer></Footer>
    </div>
  );
}
