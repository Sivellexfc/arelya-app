import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/yuksek-doseme/image-070.jpg";
import image_2 from "../sources/yuksek-doseme/image-071.jpg";
import image_3 from "../sources/yuksek-doseme/image-072.jpg";
import image_4 from "../sources/yuksek-doseme/image-073.jpg";
import image_5 from "../sources/yuksek-doseme/image-074.jpg";

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
                <button className="button-pro">ALÜMİNYUM SÜPÜRGELİK</button>
              </a>
              <a href="/karo-hali">
                <button className="button-pro">KARO HALI</button>
              </a>
              <a href="/yukseltilmis-doseme-sistemleri">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</button>
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
                    <h3>YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Yükseltmilmiş döşeme nedir?</strong> Çeşitlenen
                      kaplama tipleri sayesinde tasarımcıların her türlü
                      isteğine cevap verebilecek duruma gelen, Yükseltilmiş
                      döşeme sistemleri ile günümüzün modern ticari alanları,
                      hem kablo vetesisatlardan uzak, sade ve estetik bir
                      görüntüye; hem de her türlü modifikasyon ve yerleşim planı
                      uygulamalarına imkan veren bir yapıya kavuşmaktadır.
                    </p>
                    <p>
                      Yükseltilmiş döşeme sistemleri, altyapıyı oluşturan çelik
                      ayaklar ve gerektiğinde kullanılan kuşaklar üzerine
                      serbest bir şekilde yerleştirilen 60 x 60 cm panellerden
                      oluşmaktadır.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>Kusursuz kablo yönetimi</p>
                    <p>Elektrik, telefon ve data kablo kanalları için gerekli alan</p>
                    <p>Kaplama çeşitleri ile tasarımda zenginlik</p>
                    <p>Modüler yapı</p>
                    <p>Çağdaş ve fonksiyonel ofis görünümü</p>
                    <p>Uygulama kolaylığı</p>
                    <p>Süratli ve minumum masraf ile tesisat değişikliği yapabilme imkanı</p>
                    <p>Süratli ve minumum masraf ile yerleşim planı değişikliği yapabilme imkanı</p>
                    <p>Kablo taşıyıcı (düzenleyici) gövdeli mobilyalardan tasarruf</p>
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
