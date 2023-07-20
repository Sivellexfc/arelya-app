import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/spor-vinil/image-009.png";
import image_3 from "../sources/spor-vinil/image-010.png";
import image_2 from "../sources/spor-vinil/image-011.png";
import image_4 from "../sources/spor-vinil/image-012.png";
import image_5 from "../sources/spor-vinil/image-012.png";

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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>SPOR VİNİL</button>
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
                    <h3>SPOR VİNİL</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Spor vinil nedir?</strong> Spor vinil zemin
                      kaplaması, dayanıklı, kaymaz ve darbelere dayanıklı bir
                      zemin yüzeyi sunan özel bir kaplamadır. Bu kaplama,
                      sporculara güvenli bir ortam sağlar ve performanslarını
                      artırmak için ideal bir zemin sunar.
                    </p>
                    <p>
                      Spor zemin çok çeşitli spor aktivitelerine ev sahipliği
                      yapmak için tasarlanmış çok amaçlı vinil spor zemin
                      kaplamasıdır. Her yaşa ve seviyeye uygun farklı şok emme
                      derecesi ve performans gerekliliklerini karşılamak için
                      beş farklı kalınlıkta tasarlanmıştır.
                    </p>
                    <p>
                      Estetik açıdan da geniş bir renk, desen ve dokuya sahip
                      olan heterojen vinil kaplamalar, mekanlara modern ve şık
                      bir görünüm kazandırır. Bu özellikleriyle, hem ticari hem
                      de ev kullanımlarında ideal bir zemin kaplama seçeneği
                      sunar.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Kaymaz Yüzey</strong> Spor vinil kaplama, özel olarak tasarlanmış kaymaz bir yüzeye sahiptir, bu da sporcuların güvenli bir şekilde hareket etmesini sağlar.
                    </p>
                    <p>
                      <strong>Dayanıklılık</strong> Spor vinil kaplama, aşınmaya dayanıklı ve darbelere karşı dayanıklı özelliklere sahiptir. Yoğun kullanıma ve spor aktivitelerine dayanacak şekilde tasarlanmıştır.
                    </p>
                    <p>
                      <strong>Ses Yalıtımı</strong> Spor vinil kaplama, gürültüyü azaltmak için ses yalıtımı özellikleri sunar. Bu özellik, spor salonlarında sessiz bir ortam yaratmaya yardımcı olur.
                    </p>
                    <p>
                      <strong>Hijyen</strong> Spor vinil kaplamalar, kolay temizlenebilir ve hijyeniktir. Antibakteriyel özellikleri sayesinde spor salonlarında temiz ve hijyenik bir ortam sağlar.
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
