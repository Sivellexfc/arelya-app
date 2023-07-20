import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_5 from "../sources/luks-vinil/image-017.png";
import image_1 from "../sources/luks-vinil/image-018.png";
import image_3 from "../sources/luks-vinil/image-019.png";
import image_4 from "../sources/luks-vinil/image-020.png";
import image_2 from "../sources/luks-vinil/image-092.jpg";

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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>LÜKS VİNİL KARO</button>
              </a>
              <a href="/aluminyum-supurgelik">
                <button className="button-pro">ALÜMİNYUM SÜPÜRGELİK</button>
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
                    <h3>LÜKS VİNİL KARO</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Lüks vinil karo nedir?</strong> Lüks vinil
                      karolarla birlikte zeminler artık birer oyun alanıdır.
                      Geniş bir yelpazeye sahip doku, renk ve tarzda hem karo
                      hem de plank formatında üretilen LVT zemin kaplama,
                      modüler formatları sayesinde sınırsız bir düzenleme
                      olanağı sunar.
                    </p>
                    <p>
                      Lüks vinil karolar doğan ve başlıca tasarım trendlerinden
                      edinilmiş desenlerden oluşan geniş bir yelpaze ile
                      mükemmel performans ve esnekliğin yanı sıra üstün tasarım
                      görünümü sunar.
                    </p>
                    <p>
                    Karolar ve şeritler halinde satılan
                      koleksiyon, mağaza ve dükkanlar, konaklama, ofisler ve
                      konut gibi ticari alan uygulamaları için idealdir.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Estetik görünüm</strong> Lüks vinil karo kaplamalar, gerçek ahşap, taş veya seramik gibi doğal malzemelerin görünümünü taklit eder. Bu sayede mekanlara lüks bir atmosfer ve zarif bir görünüm kazandırır.
                    </p>
                    <p>
                      <strong>Dayanıklılık</strong> Lüks vinil kaplamalar, dayanıklı yapılarıyla uzun ömürlü bir kullanım sunar. Çizilmelere, lekelere ve aşınmalara karşı dirençlidir.
                    </p>
                    <p>
                      <strong>Kolay bakım</strong>  Lüks vinil kaplamalar, kolay temizlenebilir ve bakımı kolaydır. Sıvı ve kir tutmaz özelliklere sahiptir. Günlük temizlik için basit bir süpürme veya silme işlemi yeterlidir.
                    </p>
                    <p>
                      <strong>Ses ve ısı yalıtımı</strong> Lüks vinil karo kaplamalar, ses yalıtımı ve ısı yalıtımı özellikleri sunar. Bu sayede ortamdaki gürültüyü azaltır ve konforlu bir iç mekan ortamı oluşturur.
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
