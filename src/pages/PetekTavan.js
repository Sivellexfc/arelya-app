import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";
import {AiOutlineArrowRight} from "react-icons/ai"
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
                <button className="button-pro">ALÜMİNYUM SÜPÜRGELİK<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>PETEK ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
                    <h3>PETEK ASMA TAVAN</h3>
                    <div style={{marginBottom:"30px"}} className="divider"></div>
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
