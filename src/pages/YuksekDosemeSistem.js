import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";
import {AiOutlineArrowRight} from "react-icons/ai"
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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>YÜKSELTİLMİŞ DÖŞEME SİSTEMLERİ<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
                    <div style={{marginBottom:"30px"}} className="divider"></div>
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
