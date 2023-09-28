import React from "react";

import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

import "../styles/product.css";
import {AiOutlineArrowRight} from "react-icons/ai"
import image_5 from "../sources/baffle-tavan/image-031.png";
import image_2 from "../sources/baffle-tavan/image-032.png";
import image_3 from "../sources/baffle-tavan/image-033.png";
import image_4 from "../sources/baffle-tavan/image-034.png";
import image_1 from "../sources/baffle-tavan/image-097.jpg";

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
                <button className="button-pro">HETEROJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>
                  BAFFLE ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/tavan-uygulamalari/petek-asma-tavan">
                <button className="button-pro">
                  PETEK ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
              </a>
              <a href="/tavan-uygulamalari/mesh-asma-tavan">
                <button className="button-pro">
                  MESH ASMA TAVAN<AiOutlineArrowRight size={15}></AiOutlineArrowRight>
                </button>
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
                    <h3>BAFFLE ASMA TAVAN</h3>
                    <div style={{marginBottom:"30px"}} className="divider"></div>
                    <p>
                      <strong>Baffle asma tavan nedir?</strong> Baffle asma
                      tavanlar, yatay veya dikey olarak yerleştirilmiş ve
                      genellikle ahşap, metal veya alüminyum malzemeden yapılmış
                      olan düz veya profilli panellere sahip olup modern ve
                      estetik görünüm sağlamak amacıyla iç mekanlarda
                      kullanılır.
                    </p>
                    <p>
                    Baffle asma tavanlar, iç mekanlarda hem görsel çekicilik sağlar hem de akustik performansı iyileştirir. Ayrıca, tesisat elemanlarını gizlemek veya entegre etmek için ideal bir seçenektir.
                    </p>
                    <p>
                      Ofisler, üniversiteler, holler, AVM'ler, bankalar, spor
                      salonları, konferans salonları, sanayi kuruluşları,
                      oteller, davet alanları, hastane tavanları gibi bir çok
                      alanda baffle asma tavan sistemleri kullanımı mevcuttur.
                    </p>
                  </div>
                </div>
                <div className="bottom-seciton-div">
                  <div className="features">
                    <h3>ÖZELLİKLER</h3>
                    <div className="divider"></div>
                    <p>
                      <strong>Görsel çekicilik :</strong> Baffle asma tavanlar, modern ve estetik bir görünüm sunar. Farklı tasarım seçenekleri ile iç mekanlara dinamik bir atmosfer katar.
                    </p>
                    <p>
                      <strong>Akustik Performans :</strong> Bu tavan sistemleri, ses yalıtımını artırarak yankıyı azaltır ve ortamın akustik kalitesini iyileştirir. Ses emme özelliği sayesinde daha iyi bir ses deneyimi sağlar.
                    </p>
                    <p>
                      <strong>Gizli Tesisat Entegrasyonu :</strong> Baffle asma tavanlar, aydınlatma sistemleri, havalandırma ve klima sistemleri gibi tesisat elemanlarını gizlemek veya entegre etmek için kullanılabilir. Bu sayede temiz ve düzenli bir görünüm elde edilir.
                    </p>
                    <p>
                      <strong>Montaj Kolaylığı :</strong> Baffle asma tavanlar, genellikle modüler bir yapıya sahiptir ve kolayca monte edilebilir. Montaj işlemi hızlı ve pratiktir.
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
