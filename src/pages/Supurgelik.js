import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/supurgelik/image-021.png";
import image_2 from "../sources/supurgelik/image-022.png";
import image_3 from "../sources/supurgelik/image-023.png";
import image_4 from "../sources/supurgelik/image-024.png";
import image_5 from "../sources/supurgelik/image-094.jpg";

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
            <a href="/homojen-vinil">
                <button className="button-pro">HOMOJEN VİNİL</button>
              </a>
              <a href="/heterojen-vinil">
                <button className="button-pro">
                  HETEROJEN VİNİL
                </button>
              </a>
              <a href="/spor-vinil">
                <button className="button-pro">SPOR VİNİL</button>
              </a>
              <a href="/kondaktif-vinil">
                <button className="button-pro">KONDAKTİF VİNİL</button>
              </a>
              <a href="/luks-vinil-karo">
                <button className="button-pro">LÜKS VİNİL KARO</button>
              </a>
              <a href="/aluminyum-supurgelik">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>ALÜMİNYUM SÜPÜRGELİK</button>
              </a>
              <a href="/karo-hali">
                <button className="button-pro">KARO HALI</button>
              </a>
              <a href="/yukseltilmis-doseme-sistemleri">
                <button className="button-pro">YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</button>
              </a>
              <a href="/baffle-asma-tavan">
                <button className="button-pro">BAFFLE ASMA TAVAN</button>
              </a>
              <a href="/petek-asma-tavan">
                <button className="button-pro">PETEK ASMA TAVAN</button>
              </a>
              <a href="/mesh-asma-tavan">
                <button className="button-pro">MESH ASMA TAVAN</button>
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
                    <div className="divider"></div>
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
      <Footer></Footer>
    </div>
  );
}
