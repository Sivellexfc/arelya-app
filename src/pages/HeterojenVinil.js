import React from "react";
import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import ProductInfo from "../components/ProductInfo";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/heterojen-vinil/image-005.png";
import image_2 from "../sources/heterojen-vinil/image-006.png";
import image_3 from "../sources/heterojen-vinil/image-007.png";
import image_4 from "../sources/heterojen-vinil/image-008.png";
import image_5 from "../sources/heterojen-vinil/image-091.jpg";

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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>
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
                    <h3>HETEROJEN VİNİL</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Heterojen vinil nedir?</strong> Heterojen vinil
                      zemin kaplaması, üst tabakası aşınmaya dayanıklı olan ve
                      farklı katmanlardan oluşan bir zemin kaplama malzemesidir.
                      Bu katmanlar arasında üst tabaka, dekoratif tabaka ve
                      stabilizasyon tabakası bulunur.
                    </p>
                    <p>
                      Heterojen vinil zemin kaplamaları, sağlık eğitim,
                      mağazacılık, konaklama ve turizm gibi ticari uygulamalar
                      için yaratıcı çözümler sunar. Kaliteli hammaddeler ve
                      yenilikçi yüzey korumaları uzun ömürlü performans ve
                      görünüm, kolay bakım ve mükemmel yaşam döngü maliyetleri
                      sunar.
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
                      <strong>Dayanıklılık</strong> Heterojen vinil kaplama, üst
                      tabakasının aşınmaya dayanıklı olması nedeniyle yoğun
                      trafik alanlarında uzun ömürlü bir çözüm sunar.
                    </p>
                    <p>
                      <strong>Kolay Bakım</strong> Su geçirmez ve leke tutmayan
                      bir yüzeye sahip olduğu için temizliği kolaydır. Sadece
                      düzenli süpürme ve ıslak bir bezle silme işlemi ile
                      temizlenebilir.
                    </p>
                    <p>
                      <strong>Hijyenik</strong> Antibakteriyel ve antifungal
                      özelliklere sahip olan bazı heterojen vinil kaplama
                      modelleri, hijyenik bir ortam sağlamak için uygundur.
                    </p>
                    <p>
                      <strong>Estetik Çeşitliliği</strong> Farklı renkler,
                      desenler ve dokularla sunulur, bu nedenle mekanlara
                      estetik bir görünüm katar. Ahşap, taş veya seramik gibi
                      doğal malzemelerin görünümünü taklit edebilir.
                    </p>
                    <p>
                      <strong>Su geçirmezlik</strong> Heterojen vinil kaplama,
                      suya dayanıklı özelliklere sahiptir ve nemli ortamlarda
                      veya ıslak alanlarda kullanılabilir.
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
