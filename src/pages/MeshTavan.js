import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_2 from "../sources/mesh-tavan/image-100.jpg";
import image_1 from "../sources/mesh-tavan/image-040.png";
import image_3 from "../sources/mesh-tavan/image-041.png";
import image_4 from "../sources/mesh-tavan/image-042.png";
import image_5 from "../sources/mesh-tavan/image-101.jpg";
import image_6 from "../sources/mesh-tavan/image-102.jpg";

export default function () {
  return (
    <div>
      <TopFooter></TopFooter>
      <DropdownNavbar></DropdownNavbar>
      <div className="main">
        <div className="header-product">
          <div className="header-product-head">
            <h4>TAVAN ÇÖZÜMLERİMİZ</h4>
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
                <button className="button-pro">YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ</button>
              </a>
              <a href="/baffle-asma-tavan">
                <button className="button-pro">BAFFLE ASMA TAVAN</button>
              </a>
              <a href="/petek-asma-tavan">
                <button className="button-pro">PETEK ASMA TAVAN</button>
              </a>
              <a href="/mesh-asma-tavan">
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>MESH ASMA TAVAN</button>
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
                    <h3>MESH ASMA TAVAN</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Mesh Asma Tavan nedir?</strong> nce metal tel
                      örgülerin bir araya gelmesiyle oluşturulur. Bu tavanlar,
                      iç mekanlarda modern ve görsel olarak çekici bir görünüm
                      sağlar.
                    </p>
                    <p>
                      Genişletilmiş metal özel boşluklu dokusu ile mükemmel ışık
                      ve hava geçirgenliği sağlayan bir malzemedir.
                    </p>
                    <p>
                      Genişletilmiş metal asma tavan panelleri, hook on, lay in,
                      lay on modelleri ile alüminyum ve galvanizden değişik göz
                      aralıkları ve sınırsız renk seçenekleri ile
                      üretilmektedir.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Hafif ve Şeffaf :</strong> Mesh asma tavanlar,
                      ince metal tel örgülerden oluşur ve hafif bir yapıya
                      sahiptir. Aynı zamanda şeffaf yapıları sayesinde ışığın
                      geçişine izin verir.
                    </p>
                    <p>
                      <strong>Görsel Çekicilik :</strong> Estetik tasarımlarıyla
                      mekanlara modern ve çekici bir görünüm kazandırır. Farklı
                      renk ve desen seçenekleri ile mekana özgün bir stil
                      sağlar.
                    </p>
                    <p>
                      <strong>Hava Dolaşımı :</strong> Mesh yapısı, hava akışını
                      engellemeden mekanın iyi bir şekilde havalandırılmasını
                      sağlar. Böylece ferah bir atmosfer oluşturur.
                    </p>
                    <p>
                      <strong>Akustik Performans :</strong> Ses emme özelliği
                      sayesinde mekanlarda yankıyı azaltır ve akustik
                      performansı iyileştirir.
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
