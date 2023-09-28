import React from "react";
import DropdownNavbar from "../components/DropdownNavbar";
import TopFooter from "../components/TopFooter";
import ProductInfo from "../components/ProductInfo";
import Footer from "../components/Footer";

import "../styles/product.css";
import {AiOutlineArrowRight} from "react-icons/ai"

import image_1 from "../sources/homojen-vinil/image-001.png";
import image_5 from "../sources/homojen-vinil/image-002.png";
import image_3 from "../sources/homojen-vinil/image-003.png";
import image_4 from "../sources/homojen-vinil/image-004.png";
import image_2 from "../sources/homojen-vinil/image-090.jpg";

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
                <button className="button-pro" style={{ color: "white", backgroundColor: "#1094cf" }}>HOMOJEN VİNİL<AiOutlineArrowRight size={15}></AiOutlineArrowRight></button>
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
                <h3>HOMOJEN VİNİL</h3>
                <div className="divider"></div>
                <p>
                  <strong>Homojen vinil nedir?</strong> Homojen vinil zemin
                  kaplaması, tek katmanlı bir yapıya sahip olan ve içerisinde
                  renk pigmentleri, aşınma direncini artıran katkı maddeleri ve
                  stabilizatörler bulunan bir zemin kaplama malzemesidir.
                </p>
                <p>
                  Homojen vinil zaman karşı koyan tarzların ve çok yönlü
                  renkleriyle, kompakt homojen vinil zemin kaplamaları, yoğun ve
                  çok yoğun trafikli alanlar için sağlam ve ultra-dayanaklı
                  çözümler sağlar.
                </p>
                <p>
                  Kaliteli hammaddeler ve yenilikçi yüzey korumaları uzun ömürlü
                  performans ve görünüm, az bakım ve mükemmel yaşam dögü
                  maliyetleri sağlar. Sağlık, eğitim, satış ve sanayi gibi
                  ticari uygulamalar için idealdir.
                </p>
              </div>
              </div>
              <div className="bottom-seciton-div">
                <div className="features">
                  <h3>ÖZELLİKLER</h3>
                  <div style={{marginBottom:"30px"}} className="divider"></div>
                  <p>
                    <strong>Dayanıklılık</strong> Homojen vinil zemin kaplaması,
                    yoğun trafik alanlarına dayanacak şekilde tasarlanmıştır.
                    Aşınmaya ve çizilmelere karşı dirençlidir.
                  </p>
                  <p>
                    <strong>Kolay Bakım</strong> Yüzeyi pürüzsüz olduğu için
                    temizliği kolaydır. Sadece düzenli süpürme ve nemli bir
                    bezle silme işlemi ile temizlenebilir.
                  </p>
                  <p>
                    <strong>Hijyenik</strong> Homojen vinil, bakteri ve mantar
                    oluşumunu engelleyen antibakteriyel özelliklere sahiptir. Bu
                    nedenle hijyenik bir zemin kaplama çözümü sunar.
                  </p>
                  <p>
                    <strong>Renk ve Desen Çeşitliliği</strong> Geniş renk ve
                    desen seçenekleri sunan homojen vinil, mekanlara estetik bir
                    görünüm katar.
                  </p>
                  <p>
                    <strong>Ses Yalıtımı Ses emici</strong> özellikleri
                    sayesinde, gürültüyü azaltır ve ortamda daha sessiz bir
                    atmosfer oluşturur.
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
