import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";

import image_1 from "../sources/petek-tavan/image-035.png";
import image_5 from "../sources/petek-tavan/image-036.png";
import image_3 from "../sources/petek-tavan/image-037.png";
import image_4 from "../sources/petek-tavan/image-038.png";
import image_2 from "../sources/petek-tavan/image-098.jpg";

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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#2c75c9" }}>PETEK ASMA TAVAN</button>
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
                    <h3>PETEK ASMA TAVAN</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Petek Asma Tavan nedir?</strong> Metal asma tavan
                      sstemeri ürün grubuna eklenen 'Open Cell' petek asma
                      tavanlar, tavan üstü tesisatın monolitik ve dekoratif bir
                      maske ile örtülmesine yardımcı olarak, asma tavan
                      çözümlerine hem fonksiyonel hem de şık bir alternatif
                      oluşturmaktadır.
                    </p>
                    <p>
                      Petek şeklindeki farklı görüntüsüyle, tasarım özgürlüğü
                      sunarak, alışveriş merkezlerinde, havaalanlarında,
                      süpermarketlerde, ofislerde kolaylıkla uygulanması
                      mümkündür.
                    </p>
                    <p>
                      Özellikle tavan arkasındaki havanın da ortam
                      sirkülasyonuna katılmasına imkan vererek, alçak tavanlı
                      geniş açıklıkları ferahlatır. Farklı renk, şekil ve petek
                      ebatları sayesinde, aydınlatma sistemleri ile rahatlıkla
                      entegre olabilir.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Görsel Çekicilik :</strong> petek asma tavanlar,
                      modern ve çağdaş bir görünüm sunar. Petek desenleri, iç
                      mekanlara estetik bir dokunuş katarken zarif bir görünüm
                      oluşturur.
                    </p>

                    <p>
                      <strong>Hava Dolaşımı :</strong> Bu tavan sistemleri,
                      petek desenlerinin aralıkları sayesinde iyi bir hava
                      dolaşımı sağlar. Böylece mekandaki havanın taze kalmasına
                      ve sirkülasyonun artmasına yardımcı olur.
                    </p>
                    <p>
                      <strong>Aydınlatma Entegrasyonu :</strong> "Open Cell"
                      petek asma tavanlar, aydınlatma sistemlerinin kolayca
                      entegre edilebilmesini sağlar. Spot ışıklar veya LED
                      aydınlatma elemanları bu tavan sistemine entegre
                      edilebilir, mekana istenilen aydınlatma efektini sağlar.
                    </p>
                    <p>
                      <strong>Akustik Performans :</strong> Petek desenlerinin
                      aralıkları, ses dalgalarının emilimini ve yayılmasını
                      optimize eder. Böylece ortamdaki yankıyı azaltarak daha
                      iyi bir akustik performans sağlar.
                    </p>
                    <p>
                      <strong>Montaj Kolaylığı :</strong> "Open Cell" petek asma
                      tavanlar, kolay monte edilebilir ve hızlı bir şekilde
                      kurulabilir. Modüler bir yapıya sahip oldukları için,
                      istenilen boyut ve şekillerde özelleştirilebilir.
                    </p>
                    <p>
                      <strong>Uzun Ömürlü ve Dayanıklı :</strong> Genellikle
                      dayanıklı ve yüksek kaliteli malzemelerden üretilen "Open
                      Cell" petek asma tavanlar, uzun süre dayanıklılık sağlar
                      ve kolayca temizlenebilir.
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
